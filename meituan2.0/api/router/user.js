const db = require("../module/db");
const {getRandom} = require("../module/tool")
const token = require("../module/token");
module.exports.addUser=function(req,res){
    db.findOne("mtUserList",{
        userPhone:req.body.userPhone
    },function(err,info){
        if(info){
            // db.updateOneById("mtUserList",info._id,{
            //     loginTime:Date.now()
            // },function(err){
            //     res.json({
            //         ok:1,
            //         msg:"更新成功"
            //     }) 
            // })
            res.json({
                ok:-1,
                msg:"该手机用户已注册"
            })
        }else{
           db.insertOne("mtUserList",{
               userName:"xiaotuanzi"+getRandom(100000,999999),
               userSex:"暂无",
               userPhone:req.body.userPhone/1,
               userPic:"暂无",
               userBirth:"暂无",
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
module.exports.update=function(req,res){
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
