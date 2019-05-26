const express = require("express");
const bodyParser = require("body-parser");
const mongodb=require("mongodb");
const db =require("./module/db");
const token =require("./module/token");
const app = express();
const tool = require("./module/tool")
const admin = require("./router/admin");
const shop = require("./router/shop");
const user = require("./router/user");
const goods = require("./router/goods");
const login = require("./router/login")


app.use(bodyParser.json());
app.use(express.static(__dirname+"/upload"));
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Methods","POST,DELETE,GET,OPTIONS,PUT");
    next();
});
app.post('/login',admin.login);
//添加管理员// app.post('/login',function(req,res){
//     db.insertOne("adminList",{
//         adminName:req.body.adminName,
//         passWord:req.body.passWord
//     },function(err){
//         res.json({
//             ok:1,
//             msg:"登录成功",
//             token:token.encode(req.body.adminName)
//         })
//     })
// });
// 获取管理员日志
app.get("/getAdminLog",admin.getAdminLog);
// 删除日志
app.delete("/deleteadminlog",admin.deleteAdminLog);

// 添加店铺类别
app.post("/addShopType",shop.addShopType);
// 获取店铺类别
app.get("/getShopType",shop.getShopType);
// 删除店铺类别
app.delete("/deleteShopType",shop.deleteShopType);
// 更新店铺类别
app.post("/updateShopType",shop.updateShopType);

// 获取所有店铺类别列表
app.get("/getAllShopTypeList",shop.getAllShopTypeList);

// 添加店铺
app.post("/addShop",shop.addShop);
// 获取店铺列表
app.get("/shopList",shop.getShopList);

// 添加商品类别
app.post("/addGoodsType",goods.addGoodsType);
// 获取商品类别
app.get("/getGoodsType",goods.getGoodsType);
// 删除商品类别
app.delete("/deleteGoodsType",goods.deleteGoodsType);
// 更新商品类别
app.post("/updateGoodsType",goods.updateGoodsType);
/******************user************* */
// 添加用户
app.post("/addUser",user.addUser);
// 获取用户列表
app.get("/getUserList",user.getUserList);
// 获取用户列表
app.delete("/deleteUser",user.deleteUser);
// 更新用户
app.post("/updateUser",user.updateUser);


  /*
  前台没分模块
  前台借口
  */
//验证码
app.get("/sendCode",login.code)
//获取验证码倒数时间
app.get("/getTime",login.codetimer)
//完成登录
app.post("/userlogin",login.login)
//收货地址
app.post("/location",function(req,res){
    var phoneId = req.body.phoneId
    var userName = req.body.userName
    var phoneNumber = req.body.phoneNumber
    var location = req.body.location
    var plate = req.body.plate
    db.findOne("userList",{phoneId},function(err,userInfo){
         if(userInfo){
             db.insertOne("location",{
                 id:userInfo._id,
                 userName,
                 phoneNumber,
                 location,
                 plate
             },function(err,results){
                 res.json({
                     ok:1,
                     msg:"添加地址成功"
                 })
             })
         }else{
             res.json({
                ok:-1,
                msg:"失败"
             })
         }
    })
})
//调取收货地址
app.get("/getlocation",function(req,res){
    console.log(1)
     var phoneId = req.query.phoneId
     db.findOne("userList",{phoneId},function(err,info){
         if(info){
             var id=info._id
               db.find("location",{id},function(err,locationInfo){
                   if(locationInfo){
                       res.json({
                           ok:1,
                           msg:"成功",
                           locationInfo
                       })
                   }else{
                       res.json({
                           ok:-1,
                           msg:"失败"
                       })
                   }
               })
         }else{
               res.json({
                   ok:-1,
                   msg:"失败"
               })
         }
     })
})
//获得当前地址
app.get("/current",function(req,res){
    var id = req.query.id
    
    db.findOneById("location",id,function(err,info){
        console.log(id)
        if(info){
            res.json({
                ok:1,
                msg:"成功",
                info
            })
        }else{
            res.json({
                ok:-1,
                msg:"失败",
            })
        }
    })
})
//修改地址
app.post("/revise",function(req,res){
    var id = req.body.id
    var userName = req.body.userName
    var phoneNumber = req.body.phoneNumber
    var location = req.body.location
    var plate = req.body.plate
           db.updateOneById("location",id,{ $set:{
            id,
            userName,
            phoneNumber,
            location,
            plate
           }  
           },function(err,results){
               console.log(id,err)
               res.json({
                   ok:1,
                   msg:"修改成功"
               })
           })
       
   
})
//删除地址 
app.get("/delete",function(req,res){
    var id = req.query.id
    db.deleteOneById("location",id,function(err,results){
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
})

   
   

app.listen(80,function(){
    console.log("success");
})
