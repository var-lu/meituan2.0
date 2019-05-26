const db = require("../module/db");
const token = require("../module/token");
const upPic=require("../module/upPic");
const {unlink}=require("fs");
const mongodb=require("mongodb");
module.exports.getGoodsType=function(req,res){
    // 获取数据的时候需要验证token
    // 前端发送token
    // 后端验证
    // 验证失败返回ok:-2
    var status = token.decode(req.headers.authorization);
    if(status.ok===1){
        var whereObj = {};
        if(req.query.goodsType){
            whereObj.goodsType=new RegExp(req.query.goodsType)
        }
        var pageIndex= req.query.pageIndex/1;
        var limitNum=10;
        db.count("goodsTypeList",whereObj,function(count){
            db.find("goodsTypeList",{
                whereObj,
                limitNum,
                skipNum:(pageIndex-1)*limitNum,
                sortObj:{loginTime:-1}
            },function(err,goodsTypeList){
                var pageSum = Math.ceil(count/limitNum);
                if(pageSum<1){
                    pageSum=1;
                }
                if(pageIndex>pageSum){
                    pageIndex=pageSum;
                }
                if(pageIndex<1){
                    pageIndex=1;
                }
                res.json({
                    ok:1,
                    goodsTypeList,
                    pageIndex,
                    pageSum
                });
            })
        })
    }else{
        res.json({
            ok:-2,
            msg:"token异常"
        })
    }
}
module.exports.addGoodsType=function(req,res){
    upPic.upPic(req,"goodsTypePic",function(obj){
        if(obj.ok===3){
            db.count("goodsTypeList",{
                goodsType:obj.params.goodsType
            },function(count){
                if(count>0){
                    // 删除已经存在店铺类型的图片
                    upPic.deletePic(obj.params.newPicName,function(){
                        res.json({
                            ok:-1,
                            msg:"该店铺类型已存在了哦，请不要继续添加^_^"
                        });
                    })
                }else{
                    db.insertOne("goodsTypeList",{
                        goodsType:obj.params.goodsType,
                        goodsTypePic:obj.params.newPicName,
                        addTime:Date.now(),
                        updateTime:Date.now()
                    },function(err){
                        res.json({
                            ok:1,
                            msg:"店铺类别添加成功了哦"
                        })
                    })
                }
            })
        }else{
            res.json({
                ok:-1,
                msg:obj.msg
            })
        }
    })
}
module.exports.deleteGoodsType=function(req,res){
    db.deleteOneById("goodsTypeList",req.query.id,function(err){
        if(!err){
            res.json({
                ok:1,
                msg:"删除成功"
            })
        }else{
            res.json({
                ok:-1,
                msg:"删除失败"
            })
        }
    })
}
// 编辑商品类别
module.exports.updateGoodsType=function(req,res){
    
    function _updateGoodsType(id,$set){
        db.updateOneById("goodsTypeList",id,{$set},function(err){
            res.json({
                ok:1,
                msg:"修改成功"
            })
        })
    }
    var bodyGoodsType=req.body.goodsType;
    if(bodyGoodsType){
        db.findOne("goodsTypeList",{goodsType:bodyGoodsType},function(err,info){
            if(info&&info._id.toString()!==req.body._id){
                res.json({
                    ok:-1,
                    msg:"这个店铺类型已存在了哦，请换个名字修改^_^"
                })
            }else{
                var $set={
                    goodsType:bodyGoodsType,
                    updateTime:Date.now()
                }
                _updateGoodsType(req.body._id,$set);
            }
        })
    }else{ 
        upPic.upPic(req,"goodsTypePic",function(obj){
            if(obj.ok===2){
                // 上传格式不对
                res.json({
                    ok:-1,
                    msg:"图片上传失败（格式不对）"
                })
            }else{
                db.findOne("goodsTypeList",{goodsType:obj.params.goodsType},function(err,info){
                    if(info&&info._id.toString()!==obj.params._id){
                        // 删除已经存在店铺类型的图片
                        upPic.deletePic(obj.params.newPicName,function(){
                            res.json({
                                ok:-1,
                                msg:"这个店铺类型已存在了哦，请换个名字修改^_^"
                            });
                        })
                    }else{
                        var $set={
                            goodsType:obj.params.goodsType,
                            updateTime:Date.now()
                        }
                        // 上传图片的修改
                        $set.goodsTypePic=obj.params.newPicName;
                        db.findOneById("goodsTypeList",obj.params._id,function(err,info){
                            // 删除之前的照片
                            unlink(__dirname+"/../upload"+info.goodsTypePic,function(){

                                _updateGoodsType(obj.params._id,$set)
                            })
                        })
                    }
                })
                
            }
        })
    }
   
}
//添加商品
module.exports.addGoods=function(req,res){
    upPic.upPic(req,"userPic",function(obj){
        if(obj.ok===2){
            // 上传格式不对
            res.json({
                ok:-1,
                msg:"图片上传失败（格式不对）"
            })
        }else{
            db.findOne("goodsList",{goodsName:obj.params.goodsName,shopId:obj.params.shopId},function(err,info){
                if(info){
                    // 删除已经存在商品的图片
                    upPic.deletePic(obj.params.newPicName,function(){
                        res.json({
                            ok:-1,
                            msg:"该商品名称已存在^_^"
                        });
                    })
                }else{
                    db.insertOne("goodsList",{
                        goodsName:obj.params.goodsName,
                        goodsType:obj.params.userSex,
                        goodsPrice:obj.params.goodsPrice,
                        goodsPic:obj.params.newPicName,
                        shopId:obj.params.shopId,
                        goodsDescription:obj.params.goodsDescription,
                        goodsState:obj.params.goodsState,
                        goodsLikeNum:obj.params.goodsLikeNum,
                        goodsSaleNum:obj.params.goodsSaleNum,
                        addTime:Date.now()
                    },function(err){
                        res.json({
                            ok:1,
                            msg:"插入成功"
                        })
                    })
                }
            })
            
        }
    })
}
module.exports.getGoodsList=function(req,res){
     // 获取数据的时候需要验证token
    // 前端发送token
    // 后端验证
    // 验证失败返回ok:-2
    var status = token.decode(req.headers.authorization);
    if(status.ok===1){
        var whereObj = {};
        if(req.query.goodsName){
            whereObj.goodsName=new RegExp(req.query.goodsName)
        }
        var pageIndex= req.query.pageIndex/1;
        var limitNum=10;
        db.count("goodsList",whereObj,function(count){
            db.find("goodsList",{
                whereObj,
                limitNum,
                skipNum:(pageIndex-1)*limitNum,
                sortObj:{loginTime:-1}
            },function(err,goodsList){
                var pageSum = Math.ceil(count/limitNum);
                if(pageSum<1){
                    pageSum=1;
                }
                if(pageIndex>pageSum){
                    pageIndex=pageSum;
                }
                if(pageIndex<1){
                    pageIndex=1;
                }
                res.json({
                    ok:1,
                    goodsList,
                    pageIndex,
                    pageSum
                });
            })
        })
    }else{
        res.json({
            ok:-2,
            msg:"token异常"
        })
    }
}
module.exports.deleteGoods=function(req,res){
    db.deleteOneById("goodsList",req.query.id,function(err){
        if(!err){
            res.json({
                ok:1,
                msg:"删除成功"
            })
        }else{
            res.json({
                ok:-1,
                msg:"删除失败"
            })
        }
    })
}
// 编辑用户信息
module.exports.updateGoods=function(req,res){
    function _updateGoods(id,$set){
        db.updateOneById("goodsList",id,{$set},function(err){
            res.json({
                ok:1,
                msg:"修改成功"
            })
        })
    }
    var bodyGoods=req.body.goods;
    if(bodyGoods){
        // 没有修改图片的
        db.findOne("goodsList",{goodsName:bodyGoods.goodsName,shopId:bodyGoods.shopId},function(err,info){
            if(info&&info._id.toString()!==bodyGoods._id){
                res.json({
                    ok:-1,
                    msg:"这个手机号已经被绑定了哦，请换个手机号修改^_^"
                })
            }else{
                var $set={};
                for(var key in bodyGoods){
                	$set[key]=bodyGoods[key]
                }
                _updateGoods(bodyGoods._id,$set);
            }
        })
    }else{ 
        // 修改图片的
        upPic.upPic(req,"goodsPic",function(obj){
            if(obj.ok===2){
                // 上传格式不对
                res.json({
                    ok:-1,
                    msg:"图片上传失败（格式不对）"
                })
            }else{
                db.findOne("goodsList",{goodsName:bodyGoods.goodsName,shopId:bodyGoods.shopId},function(err,info){
                    if(info&&info._id.toString()!==obj.params._id){
                        // 删除已经存在店铺类型的图片
                        upPic.deletePic(obj.params.newPicName,function(){
                            res.json({
                                ok:-1,
                                msg:"这个手机号已经被绑定了哦，请换个手机号修改^_^"
                            });
                        })
                    }else{
                         var $set={};
		                for(var key in bodyGoods){
		                	$set[key]=bodyGoods[key]
		                }
                        // 上传图片的修改
                        $set.goodsPic=obj.params.newPicName;
                        db.findOneById("goodsList",obj.params._id,function(err,info){
                            // 删除之前的照片
                            unlink(__dirname+"/../upload"+info.goodsPic,function(){

                                _updateGoods(obj.params._id,$set)
                            })
                        })
                    }
                })
                
            }
        })
    }
   
}