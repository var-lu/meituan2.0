const db = require("../module/db");
const token = require("../module/token");
module.exports.login=function(req,res){
    db.findOne("adminList",{
        adminName:req.body.adminName,
        passWord:req.body.passWord
    },function(err,info){
        if(info){
            db.insertOne("adminLog",{
                adminId:info._id,
                adminName:req.body.adminName,
                loginTime:Date.now()
            },function(err){
                res.json({
                    ok:1,
                    msg:"登陆成功",
                    token:token.encode(req.body.adminName)
                }) 
            })
        }else{
            res.json({
                ok:-1,
                msg:"密码不正确哦，请重新输入"
            })
        }
    })
}
module.exports.getAdminLog=function(req,res){
     // 获取数据的时候需要验证token
    // 前端发送token
    // 后端验证
    // 验证失败返回ok:-2
    var status = token.decode(req.headers.authorization);
    if(status.ok===1){
        var whereObj = {};
        if(req.query.adminName){
            whereObj.adminName=new RegExp(req.query.adminName)
        }
        var pageIndex= req.query.pageIndex/1;
        var limitNum=10;
        db.count("adminLog",whereObj,function(count){
            db.find("adminLog",{
                whereObj,
                limitNum,
                skipNum:(pageIndex-1)*limitNum,
                sortObj:{loginTime:-1}
            },function(err,adminLog){
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
                    adminLog,
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
module.exports.deleteAdminLog=function(req,res){
    db.deleteOneById("adminLog",req.query.id,function(err){
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
