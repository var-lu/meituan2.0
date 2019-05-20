
const axios = require("axios");
const state={
    token:localStorage.token,
    adminLog:[]
};
const mutations={
    SET_TOKEN(state,token){
        state.token=localStorage.token=token;
    },
    OUT_LOGIN(state){
        state.token=localStorage.token="";
    },
    SET_ADMIN_LOG(state,adminLog){
        state.adminLog=adminLog;
    }
};
const actions={
    login({commit},that){
        axios.post("login",that.adminForm)
        .then(data=>{
            if(data&&data.ok===1){
                that.$message.success("恭喜你，登录成功");
                // 必须用commit改变state里的token值可以实现页面的跳转
                commit("SET_TOKEN",data.token);
            }else{
                that.$message.error(data.msg);
            }
            that.isLoading=false;
        })
    },
    getAdminLog({commit},obj){
        // 发送请求获取登录日志
        axios.get("getAdminLog",{
            params:{
                adminName:obj.adminName,
                pageIndex:obj.pageIndex
            }
        })
        .then(data=>{
            // 判断返回的值，并改变state里的的值
            if(data&&data.ok===1){
                commit("SET_ADMIN_LOG",data.adminLog);
                commit("SET_PAGE_INFO",{
                    pageIndex:data.pageIndex,
                    pageSum:data.pageSum
                });
            }
        })
    },
    deleteAdminLog(content,obj){
        axios.delete("deleteAdminLog",{
            params:{
                id:obj.id
            }
        }).then(data=>{
            if(data.ok===1){
                obj.that.$message.success("删除成功");
                if(obj.index<1){
                    content.dispatch('getAdminLog',content.rootState.pageInfo.pageIndex-1);
                }else{
                    content.dispatch('getAdminLog',content.rootState.pageInfo.pageIndex);
                }
            }else{
                obj.that.$message.error("删除失败");
            }
        });
    }
};
export default {
    state,
    mutations,
    actions
}