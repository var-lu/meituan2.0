const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const admin = require("./router/admin");
const shop = require("./router/shop");
const user = require("./router/user")
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
/******************user************* */
// 添加用户
app.post("/addUser",user.addUser);
// 获取用户列表
app.get("/getUserList",user.getUserList);
// 获取用户列表
app.delete("/deleteUser",user.deleteUser);
app.listen(80,function(){
    console.log("success");
});