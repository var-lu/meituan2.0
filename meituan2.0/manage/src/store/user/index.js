
const axios = require("axios");
const state={
    token:localStorage.token,
    userLog:[]
};
const mutations={
    SET_TOKEN(state,token){
        state.token=localStorage.token=token;
    },
    OUT_LOGIN(state){
        state.token=localStorage.token="";
    },
    SET_ADMIN_LOG(state,userLog){
        state.userLog=userLog;
    }
};
const actions={
    login({commit},that){
        axios.post("login",that.userForm)
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
    getUserLog({commit},obj){
        // 发送请求获取登录日志
        axios.get("getUserLog",{
            params:{
                userName:obj.userName,
                pageIndex:obj.pageIndex
            }
        })
        .then(data=>{
            // 判断返回的值，并改变state里的的值
            if(data&&data.ok===1){
                commit("SET_ADMIN_LOG",data.userLog);
                commit("SET_PAGE_INFO",{
                    pageIndex:data.pageIndex,
                    pageSum:data.pageSum
                });
            }
        })
    },
    deleteUserLog(content,obj){
        axios.delete("deleteUserLog",{
            params:{
                id:obj.id
            }
        }).then(data=>{
            if(data.ok===1){
                obj.that.$message.success("删除成功");
                if(obj.index<1){
                    content.dispatch('getUserLog',content.rootState.pageInfo.pageIndex-1);
                }else{
                    content.dispatch('getUserLog',content.rootState.pageInfo.pageIndex);
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