const db = require("../module/db");
const {getPageList} = require("../module/common");
const token = require("../module/token");
const upPic=require("../module/upPic");
const {unlink}=require("fs");
const mongodb=require("mongodb");

/*****************************店铺类别*****************************************/
module.exports.getShopType=function(req,res){
    // 获取数据的时候需要验证token
    // 前端发送token
    // 后端验证
    // 验证失败返回ok:-2
    var status = token.decode(req.headers.authorization);
    if(status.ok===1){
        var whereObj = {};
        if(req.query.shopType){
            whereObj.shopType=new RegExp(req.query.shopType)
        }
        var pageIndex= req.query.pageIndex/1;
        var limitNum=10;
        db.count("shopTypeList",whereObj,function(count){
            db.find("shopTypeList",{
                whereObj,
                limitNum,
                skipNum:(pageIndex-1)*limitNum,
                sortObj:{loginTime:-1}
            },function(err,shopTypeList){
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
                    shopTypeList,
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
module.exports.addShopType=function(req,res){
    upPic.upPic(req,"shopTypePic",function(obj){
        if(obj.ok===3){
            db.count("shopTypeList",{
                shopType:obj.params.shopType
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
                    db.insertOne("shopTypeList",{
                        shopType:obj.params.shopType,
                        shopTypePic:obj.params.newPicName,
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
module.exports.deleteShopType=function(req,res){
    db.deleteOneById("shopTypeList",req.query.id,function(err){
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
// 编辑店铺类别
module.exports.updateShopType=function(req,res){
    function _updateShopType(id,$set){
        db.updateOneById("shopTypeList",id,{$set},function(err){
            res.json({
                ok:1,
                msg:"修改成功"
            })
        })
    }
    var bodyShopType=req.body.shopType;
    if(bodyShopType){
        db.findOne("shopTypeList",{shopType:bodyShopType},function(err,info){
            if(info&&info._id.toString()!==req.body._id){
                res.json({
                    ok:-1,
                    msg:"这个店铺类型已存在了哦，请换个名字修改^_^"
                })
            }else{
                var $set={
                    shopType:bodyShopType,
                    updateTime:Date.now()
                }
                _updateShopType(req.body._id,$set);
            }
        })
    }else{ 
        upPic.upPic(req,"shopTypePic",function(obj){
            if(obj.ok===2){
                // 上传格式不对
                res.json({
                    ok:-1,
                    msg:"图片上传失败（格式不对）"
                })
            }else{
                db.findOne("shopTypeList",{shopType:obj.params.shopType},function(err,info){
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
                            shopType:obj.params.shopType,
                            updateTime:Date.now()
                        }
                        // 上传图片的修改
                        $set.shopTypePic=obj.params.newPicName;
                        db.findOneById("shopTypeList",obj.params._id,function(err,info){
                            // 删除之前的照片
                            unlink(__dirname+"/../upload"+info.shopTypePic,function(){

                                _updateShopType(obj.params._id,$set)
                            })
                        })
                    }
                })
                
            }
        })
    }
}

// 获得店铺所有类别
module.exports.getAllShopTypeList = function (req,res) {
    db.find("shopTypeList",{
        sortObj:{addTime:-1}
    },function (err,shopTypeList) {
        res.json({
            ok:1,
            shopTypeList
        })
    })
}
/*****************************店铺*****************************************/
module.exports.addShop=function(req,res){
    upPic.upPic(req,"shopPic",function(obj){
        if(obj.ok===3){
            console.log(obj)
	        db.findOneById("shopList",obj.params.shopTypeId,function (err,shopType) {
                console.log(shoptype)	
	         /*   db.count("shopList",{
	                shop :obj.params.shop
	            },function(count){
	                if(count>0){
	                    // 删除已经存在店铺的图片
	                    upPic.deletePic(obj.params.newPicName,function(){
	                        res.json({
	                            ok:-1,
	                            msg:"该店铺已存在了哦，请不要继续添加^_^"
	                        });
	                    })
	                }else{
		                    
	                }
	            })*/
	   			db.insertOne("shopList",{
	                shopName:obj.params.shopName,
	                shopPic:obj.params.newPicName,
	                // shopTypeId:mongodb.ObjectId(obj.params.shopTypeId),
	                shopTypeId:shopType._id,
	                shopType:shopType.shopType,
	                addTime:Date.now(),
	                updateTime:Date.now()
	            },function(err){
	                res.json({
	                    ok:1,
	                    msg:"店铺添加成功了哦"
	                })
	        	})
	        })   
        }else{
            res.json({
                ok:-1,
                msg:obj.msg
            })
        }
    })
}
// 获取店铺列表
module.exports.getShopList = function (req,res) {
    getPageList(req,res,"shopList",{
        sortObj:{
            addTime:-1
        }
    })
}
//删除店铺
module.exports.deleteShop=function(req,res){
    db.deleteOneById("shopList",req.query.id,function(err){
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
// 编辑店铺信息
module.exports.updateShop=function(req,res){
    function _updateShop(id,$set){
        db.updateOneById("shopList",id,{$set},function(err){
            res.json({
                ok:1,
                msg:"修改成功"
            })
        })
    }
    var bodyGoods=req.body.goods;
    if(bodyGoods){
        // 没有修改图片的
        var $set={};
        for(var key in bodyGoods){
        	$set[key]=bodyGoods[key]
        }
        _updateShop(bodyGoods._id,$set);
           
    }else{ 
        // 修改图片的
        upPic.upPic(req,"shopPic",function(obj){
            if(obj.ok===2){
                // 上传格式不对
                res.json({
                    ok:-1,
                    msg:"图片上传失败（格式不对）"
                })
            }else{
                 var $set={};
                for(var key in bodyShop){
                	$set[key]=bodyShop[key]
                }
                // 上传图片的修改
                $set.shopPic=obj.params.newPicName;
                db.findOneById("shopList",obj.params._id,function(err,info){
                    // 删除之前的照片
                    unlink(__dirname+"/../upload"+info.shopPic,function(){

                        _updateShop(obj.params._id,$set)
                    })
                })
                    
            }
        })
    }
   
}