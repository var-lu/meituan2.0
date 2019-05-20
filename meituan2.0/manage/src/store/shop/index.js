const axios=require("axios")
const state={
    shopTypeList:[]
};
const mutations={
    GET_SHOP_LOG(state,shopTypeList){
        state.shopTypeList=shopTypeList;
    }
};
const actions={
    getShopTypeList({commit},params){
        axios.get("getShopType",{
            params
        }).then(data=>{
            if(data.ok===1){
                commit("GET_SHOP_LOG",data.shopTypeList);
                commit("SET_PAGE_INFO",{
                    pageIndex:data.pageIndex,
                    pageSum:data.pageSum
                })
            }
            
        })
    },
    deleteShopType(content,obj){
        axios.delete("deleteShopType",{
            params:{
                id:obj.id
            }
        }).then(data=>{
            if(data.ok===1){
                obj.that.$message.success("删除成功");
                if(obj.index<1){
                    content.dispatch('getShopTypeList',content.rootState.pageInfo.pageIndex-1);
                }else{
                    content.dispatch('getShopTypeList',content.rootState.pageInfo.pageIndex);
                }
            }else{
                obj.that.$message.error("删除失败");
            }
        });
    },
    updateNoPic(content,obj){
        axios.post("updateShopType",{
            shopType:obj.shopType,
            _id:obj._id
        }).then(data=>{
            if(data.ok===1){
                obj.that.$message.success("修改成功");
                obj.that.form.shopType="";
                if(obj.index<1){
                    content.dispatch('getShopTypeList',content.rootState.pageInfo.pageIndex-1);
                }else{
                    content.dispatch('getShopTypeList',content.rootState.pageInfo.pageIndex);
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