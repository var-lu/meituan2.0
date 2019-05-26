const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
function _connect(cb){
	mongoClient.connect("mongodb://127.0.0.1:27017",{
		useNewUrlParser: true
	},function(err,client){
		if(err){
			console.log("连接错误")
		}else{
			
			var db = client.db("meituan")
			cb(db)
			
		}
	})
}
module.exports.insertOne = function(coll,insertObj,cb){
	_connect(function(db){
		db.collection(coll).insertOne(insertObj,cb)
	})
}
module.exports.count = function(coll,whereObj,cb){
	_connect(function(db){
		db.collection(coll).count(whereObj).then(cb)
	})
}
module.exports.find = function(coll,obj,cb){
	obj.whereObj = obj.whereObj || {}
	obj.skipNum = obj.skipNum || 0
	obj.limitNum = obj.limitNum || 0
	obj.sortObj = obj.sortObj || {}
	_connect(function(db){
		db.collection(coll).find(obj.whereObj).skip(obj.skipNum).limit(obj.limitNum).sort(obj.sortObj).toArray(cb)
	})
}
module.exports.updateOneById = function (coll,id,upObj,cb) {
    _connect(db=>{
        db.collection(coll).updateOne({_id:mongodb.ObjectId(id)},upObj,cb)
    })
}
module.exports.deleteOneById = function(coll,id,cb){
	_connect(function(db){
		db.collection(coll).deleteOne({_id:mongodb.ObjectId(id)},cb)
	})
}
module.exports.findOneById = function(coll,id,cb){
	_connect(function(db){
		db.collection(coll).findOne({_id:mongodb.ObjectId(id)},cb)
	})
}
module.exports.findOne = function(coll,whereObj,cb){
	_connect(function(db){
		db.collection(coll).findOne(whereObj,cb)
	})
}
module.exports.updateOne = function (coll,whereObj,upObj,cb) {
    _connect(db=>{
        db.collection(coll).updateOne(whereObj,upObj,cb)
    })
}
