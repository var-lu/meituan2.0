
const axios = require("axios");
const state={
    userList:[]
};
const mutations={
    SET_USER_LIST(state,userList){
        state.userList=userList;
    }
};
const actions={
    addUser({commit},obj){
        axios.post("addUser",{userPhone:obj.userPhone})
        .then(data=>{
            if(data&&data.ok===1){
                obj.that.$message.success("恭喜你，添加成功");
                obj.that.$store.dispatch("getUserList",{})
            }else{
                obj.that.$message.error(data.msg);
            }
            obj.that.isLoading=false;
        })
    },
    getUserList({commit},obj){
        // 发送请求获取用户列表
        axios.get("getUserList",{
            params:{
                userName:obj.userName,
                pageIndex:obj.pageIndex
            }
        })
        .then(data=>{
            // 判断返回的值，并改变state里的的值
            console.log(data)
            if(data&&data.ok===1){
                commit("SET_USER_LIST",data.mtUserList);
                commit("SET_PAGE_INFO",{
                    pageIndex:data.pageIndex,
                    pageSum:data.pageSum
                });
            }
        })
    },
    deleteUser(content,obj){
        axios.delete("deleteUser",{
            params:{
                id:obj.id
            }
        }).then(data=>{
            if(data.ok===1){
                obj.that.$message.success("删除成功");
                // if(obj.index<1){
                //     content.dispatch('getUserList',content.rootState.pageInfo.pageIndex-1);
                // }else{
                //     content.dispatch('getUserList',content.rootState.pageInfo.pageIndex);
                // }
                    content.dispatch('getUserList',content.rootState.pageInfo.pageIndex-(obj.index<1?1:0));
            }else{
                obj.that.$message.error("删除失败");
            }
        });
    },
    updateUserNoPic(content,obj){
        axios.post("updateUser",{
            user:obj.form
        }).then(data=>{
            if(data.ok===1){
                obj.that.$message.success("修改成功");
                for(var key in obj.that.form){
                    obj.that.form[key]="";
                }
                content.dispatch('getUserList',content.rootState.pageInfo.pageIndex-(obj.index<1?1:0));
            }else{
                obj.that.$message.error("修改失败");
            }
        })
    }
};
export default {
    state,
    mutations,
    actions
}