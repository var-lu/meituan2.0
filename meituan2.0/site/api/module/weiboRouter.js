const tool = require("./tool");
const querystring = require("querystring");
const db = require("./db.js");
const {info} = require("./config");

// 获取微博信息
module.exports.getWeibo = function (res,query) {
    /*对信息进行分页*/
    var pageIndex =  query.pageIndex/1;// 当前页
    var pageNum = 5;// 每页显示的条数
    var pageSum = 1;// 总页数
    db.count("contextList",{},function (count) {
        pageSum = Math.ceil(count/pageNum);
        if(pageSum < 1)
            pageSum =1;
        if(pageIndex >pageSum)
            pageIndex = pageSum;
        if(pageIndex < 1)
            pageIndex = 1;
        db.find("contextList",{
            sortObj:{addTime:-1},
            limitNum:pageNum,
            skipNum:(pageIndex - 1)*pageNum
        },function (err,contextList) {
            res.end(JSON.stringify({
                ok:1,
                contextList,
                pageIndex,
                pageSum
            }))
        })
    })

}
module.exports.addWeibo = function (res,str) {
    db.count("contextList",{
        context:querystring.parse(str).context
    },function (count) {
        if(count > 0)
            tool.send(res,-1,info.CONTEXT_ERR);
        else{
            db.insertOne("contextList",{
                context:querystring.parse(str).context,
                topNum:0,
                downNum:0,
                addTime:tool.getNowTime()
            },function (err,results) {
                if(err){
                    tool.send(res);
                }else{
                    tool.send(res,1,info.SUCCESS)
                }
            })
        }
    })

}
module.exports.deleteWeibo = function (res,query) {
    db.deleteOneById("contextList",query.id,function (err,results) {
        if(err)
            tool.send(res);
        else
            tool.send(res,1,"删除成功")
    })
}
module.exports.upWeibo = function (res,query) {
    var id = query.id;
    var type = query.type/1;
    var $inc = {
        topNum:1
    }
    if(type !== 1){
        $inc = {
            downNum:1
        }
    }
    db.updateOneById("contextList",id,{
       $inc
    },function (err,results) {
        if(err)
            tool.send(res);
        else
            tool.send(res,1,"更新成功")
    })
}