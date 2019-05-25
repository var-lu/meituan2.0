const express = require("express");
const bodyParser = require("body-parser");
const mongodb=require("mongodb");
const db =require("./module/db");
const token =require("./module/token");
const app = express();
const admin = require("./router/admin");
const shop = require("./router/shop");
const user = require("./router/user");
const goods = require("./router/goods");

app.use(bodyParser.json());
app.use(express.static(__dirname+"/upload"));
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Methods","POST,DELETE,GET,OPTIONS,PUT");
    next();
});
app.post('/login',admin.login);
// // 添加管理员//记得要注释掉上一行的代码
// app.post('/login',function(req,res){
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

app.listen(80,function(){
    console.log("success");
});