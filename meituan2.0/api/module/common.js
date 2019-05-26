const db = require("./db");
const config = require("./config");
module.exports.getPageList=function(req,res,coll,obj) {
    var pageIndex = req.query.pageIndex?req.query.pageIndex/1:1;
    
    db.count(coll,{},function (count) {
        var pageSum = Math.ceil(count/config.limitNum);
        if(pageSum < 1)
            pageSum =1;
        if(pageIndex > pageSum)
            pageIndex = pageSum;
        if(pageIndex <1)
            pageIndex = 1;
        db.find(coll,obj,function (err,shopList) {
            res.json({
                shopList,
                pageSum,
                pageIndex
            })
        })
    })
   }
