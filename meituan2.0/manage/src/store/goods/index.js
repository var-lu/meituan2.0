const axios=require("axios")
const state={
    goodsTypeList:[]
};
const mutations={
    GET_GOODS_LOG(state,goodsTypeList){
        state.goodsTypeList=goodsTypeList;
    }
};
const actions={
    getGoodsTypeList({commit},params){
        axios.get("getGoodsType",{
            params
        }).then(data=>{
            if(data.ok===1){
                commit("GET_GOODS_LOG",data.goodsTypeList);
                commit("SET_PAGE_INFO",{
                    pageIndex:data.pageIndex,
                    pageSum:data.pageSum
                })
            }
            
        })
    },
    deleteGoodsType(content,obj){
        axios.delete("deleteGoodsType",{
            params:{
                id:obj.id
            }
        }).then(data=>{
            if(data.ok===1){
                obj.that.$message.success("删除成功");
                if(obj.index<1){
                    content.dispatch('getGoodsTypeList',content.rootState.pageInfo.pageIndex-1);
                }else{
                    content.dispatch('getGoodsTypeList',content.rootState.pageInfo.pageIndex);
                }
            }else{
                obj.that.$message.error("删除失败");
            }
        });
    },
    updateNoPic(content,obj){
        axios.post("updateGoodsType",{
            goodsType:obj.goodsType,
            _id:obj._id
        }).then(data=>{
            if(data.ok===1){
                obj.that.$message.success("修改成功");
                obj.that.form.goodsType="";
                if(obj.index<1){
                    content.dispatch('getGoodsTypeList',content.rootState.pageInfo.pageIndex-1);
                }else{
                    content.dispatch('getGoodsTypeList',content.rootState.pageInfo.pageIndex);
                }
            }else{
                obj.that.$message.error("修改失败");
            }
        })
    }
}

export default{
    state,
    mutations,
    actions
}