const db = require("../module/db");
const token = require("../module/token");
const upPic=require("../module/upPic");
const {unlink}=require("fs");
const mongodb=require("mongodb");
module.exports.getUser=function(req,res){
    // 获取数据的时候需要验证token
    // 前端发送token
    // 后端验证
    // 验证失败返回ok:-2
    var status = token.decode(req.headers.authorization);
    if(status.ok===1){
        var whereObj = {};
        if(req.query.userName){
            whereObj.userName=new RegExp(req.query.userName)
        }
        var pageIndex= req.query.pageIndex/1;
        var limitNum=10;
        db.count("userList",whereObj,function(count){
            db.find("userList",{
                whereObj,
                limitNum,
                skipNum:(pageIndex-1)*limitNum,
                sortObj:{loginTime:-1}
            },function(err,userList){
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
                    userList,
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
    upPic.upPic(req,"userNamePic",function(obj){
        if(obj.ok===3){
            db.count("userNameList",{
                userName:obj.params.userName
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
                    db.insertOne("userNameList",{
                        userName:obj.params.userName,
                        userNamePic:obj.params.newPicName,
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
    db.deleteOneById("userNameList",req.query.id,function(err){
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
        db.updateOneById("userNameList",id,{$set},function(err){
            res.json({
                ok:1,
                msg:"修改成功"
            })
        })
    }
    var bodyShopType=req.body.userName;
    if(bodyShopType){
        db.findOne("userNameList",{userName:bodyShopType},function(err,info){
            if(info&&info._id.toString()!==req.body._id){
                res.json({
                    ok:-1,
                    msg:"这个店铺类型已存在了哦，请换个名字修改^_^"
                })
            }else{
                var $set={
                    userName:bodyShopType,
                    updateTime:Date.now()
                }
                _updateShopType(req.body._id,$set);
            }
        })
    }else{ 
        upPic.upPic(req,"userNamePic",function(obj){
            if(obj.ok===2){
                // 上传格式不对
                res.json({
                    ok:-1,
                    msg:"图片上传失败（格式不对）"
                })
            }else{
                db.findOne("userNameList",{userName:obj.params.userName},function(err,info){
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
                            userName:obj.params.userName,
                            updateTime:Date.now()
                        }
                        // 上传图片的修改
                        $set.userNamePic=obj.params.newPicName;
                        db.findOneById("userNameList",obj.params._id,function(err,info){
                            // 删除之前的照片
                            unlink(__dirname+"/../upload"+info.userNamePic,function(){

                                _updateShopType(obj.params._id,$set)
                            })
                        })
                    }
                })
                
            }
        })
    }
   
}