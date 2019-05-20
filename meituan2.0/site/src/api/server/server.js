const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const tool = require("../tool/tool")
const app = express();
const db = require("../db/db")
const token = require("../token/token")
app.use(bodyParser.json());
//验证码
app.get("/sendCode",function(req,res){
    /*
    * 1、接收数据
    * 2、查看手机号是不是在我的验证码集合当中
    *   1、有
    *       判断时间是否过到期（1分钟）
    *           1、到期，发送验证码
    *           2、没到期，等多少秒以再来发
    *   2、无
    *       发送验证码*/
   var phoneId = req.query.phoneId
   
   db.findOne("phoneCode",{phoneId},function(err,info){
       
       var code = tool.getRandom(100000,999999)
       if(info){
        console.log(222)
           const lTime = Date.now()-info.sendTime;
           if(lTime<=10*1000){
               res.json({
                   ok : -1,
                   msg : "您还需要再等待"+(10*1000-lTime)/1000+"秒"
               })
               }else{
                db.updateOne("phoneCode",{phoneId},{
                    $set:{
                        code,
                        sendTime:Date.now()
                    }
                },function(err,results){
                    res.json({
                        ok:1,
                        msg:"发送验证码成功22",
                        code
                    })
                })
           }
       }else{
        db.insertOne("phoneCode",{
            phoneId,
            code,
            sendTime:Date.now()
        },function (err,results) {
            console.log(66666)
            res.json({
                ok:1,
                msg:"发送验证码成功11",
                code
            })
        })
       }
   })
})
//获取验证码倒数时间
app.get("/getTime",function(req,res){
    var phoneId = req.query.phoneId
    console.log(phoneId,99999)
    db.findOne("phoneCode",{phoneId},function(err,info){
        console.log(info)
        if(info){
            const timeNum =parseInt(10-(Date.now()-info.sendTime)/1000);
            res.json({
                ok:1,
                timeNum:(timeNum>0?timeNum:0),
                msg:"成功"
            })
        }else{
            res.json({
                ok:-1
            })
        }
        
    })
})
//完成登录
app.post("/login",function(req,res){
    var phoneId = req.body.phoneId
    var code = req.body.code/1
    db.findOne("phoneCode",{phoneId,code},function(err,info){
        if(info){
            if((Date.now()-info.sendTime)<=10*1000){
              //有效
              db.findOne("userList",{phoneId},function(err,userInfo){
                  if(userInfo){
                      db.updateOne("userList",{phoneId},{
                          $set:{
                            lastLoginTime:Date.now(),
                          }
                      },function(err,results){
                        res.json({
                            ok:1,
                            phoneId,
                            msg:"登陆成功",
                            token:token.encode(req.body.phoneId)
                        })
                      })
                  }else{
                      db.insertOne("userList",{
                        phoneId,
                        lastLoginTime:Date.now(),
                        regTime:Date.now(),
                        moneySum:999999
                      },function(err,results){
                        res.json({
                            ok:1,
                            phoneId,
                            msg:"登陆成功",
                            token:token.encode(req.body.phoneId)
                        })
                      })
                  }
              })
            }else{
                res.json({
                    ok:-1,
                    msg:"验证码过期"
                })
            }
        }else{
            res.json({
                ok:-1,
                msg:"手机号或验证码错误"
            })
        }
    })
})
   
   

app.listen(80,function(){
    console.log("success");
})
