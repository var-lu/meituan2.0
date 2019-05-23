const db = require("../module/db");
const {getRandom} = require("../module/tool");
const upPic =require("../module/upPic");
const token = require("../module/token");
module.exports.addUser=function(req,res){
    upPic.upPic(req,"userPic",function(obj){
        if(obj.ok===2){
            // 上传格式不对
            res.json({
                ok:-1,
                msg:"图片上传失败（格式不对）"
            })
        }else{
            db.findOne("mtUserList",{userPhone:obj.params.userPhone},function(err,info){
                if(info&&info._id.toString()!==obj.params._id){
                    // 删除已经存在店铺类型的图片
                    upPic.deletePic(obj.params.newPicName,function(){
                        res.json({
                            ok:-1,
                            msg:"这个手机号已经被绑定了哦，请换个手机号修改^_^"
                        });
                    })
                }else{
                    db.insertOne("mtUserList",{
                        userName:obj.params.userName,
                        userSex:obj.params.userSex,
                        userPhone:obj.params.userPhone/1,
                        userPic:obj.params.newPicName,
                        userBirth:obj.params.userBirth,
                        registTime:Date.now(),
                        loginTime:Date.now()
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
module.exports.getUserList=function(req,res){
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
        db.count("mtUserList",whereObj,function(count){
            db.find("mtUserList",{
                whereObj,
                limitNum,
                skipNum:(pageIndex-1)*limitNum,
                sortObj:{loginTime:-1}
            },function(err,mtUserList){
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
                    mtUserList,
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
module.exports.deleteUser=function(req,res){
    db.deleteOneById("mtUserList",req.query.id,function(err){
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
module.exports.updateUser=function(req,res){
    function _updateUser(id,$set){
        db.updateOneById("mtUserList",id,{$set},function(err){
            res.json({
                ok:1,
                msg:"修改成功"
            })
        })
    }
    var bodyUser=req.body.user;
    if(bodyUser){
        // 没有修改图片的
        db.findOne("mtUserList",{userPhone:bodyUser.userPhone},function(err,info){
            if(info&&info._id.toString()!==bodyUser._id){
                res.json({
                    ok:-1,
                    msg:"这个手机号已经被绑定了哦，请换个手机号修改^_^"
                })
            }else{
                var $set={
                    userName:bodyUser.userName,
                    userPhone:bodyUser.userPhone,
                    userSex:bodyUser.userSex,
                    userBirth:bodyUser.userBirth
                }
                
                _updateUser(bodyUser._id,$set);
            }
        })
    }else{ 
        // 修改图片的
        upPic.upPic(req,"userPic",function(obj){
            if(obj.ok===2){
                // 上传格式不对
                res.json({
                    ok:-1,
                    msg:"图片上传失败（格式不对）"
                })
            }else{
                db.findOne("mtUserList",{userPhone:obj.params.userPhone},function(err,info){
                    if(info&&info._id.toString()!==obj.params._id){
                        // 删除已经存在店铺类型的图片
                        upPic.deletePic(obj.params.newPicName,function(){
                            res.json({
                                ok:-1,
                                msg:"这个手机号已经被绑定了哦，请换个手机号修改^_^"
                            });
                        })
                    }else{
                        var $set={
                            userName:obj.params.userName,
                            userPhone:obj.params.userPhone,
                            userSex:obj.params.userSex,
                            userBirth:obj.params.userBirth 
                        }
                        // 上传图片的修改
                        $set.shopTypePic=obj.params.newPicName;
                        db.findOneById("mtUserList",obj.params._id,function(err,info){
                            // 删除之前的照片
                            unlink(__dirname+"/../upload"+info.userPic,function(){

                                _updateUser(obj.params._id,$set)
                            })
                        })
                    }
                })
                
            }
        })
    }
   
}