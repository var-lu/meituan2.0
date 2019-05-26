<template>
    <div>
        <div class="toolbar" style="float:left">
            <el-form :inline="true" ref="search" class="demo-form-inline">
                <el-form-item label="用户名称" prop="userName">
                    <el-input v-model="search.userName"  placeholder="用户名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="$store.dispatch('getUserList',search)" >查询</el-button>
                </el-form-item>
                <!-- 模仿前台添加用户 -->
                <el-form-item>
                    <el-button type="primary" @click="addOrUpdate=true;addUserVisible=true" >添加用户</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table
        v-loading="$store.state.isLoading"
        :data="$store.state.user.userList"
        style="width: 100%;">
            <el-table-column
                v-if="false"
                prop="_id"
                label="用户id"
                align="center">
            </el-table-column>
            <el-table-column
                prop="userName"
                label="用户名"
                align="center">
            </el-table-column>
            <el-table-column
                prop="userSex"
                label="性别"
                align="center">
            </el-table-column>
            <el-table-column
                label="头像"
                align="center">
                <template slot-scope="scope">
                    <img width="60" 
                    height="60" 
                    :src="$store.state.config.baseUrl+scope.row.userPic"
                    alt="">
                </template>
            </el-table-column>
            <el-table-column
                prop="userBirth"
                label="生日"
                align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ new Date(scope.row.userBirth).toLocaleDateString()}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="userPhone"
                label="手机号"
                align="center">
            </el-table-column>
            <el-table-column
                label="注册时间"
                align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.registTime | date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="最近登录时间"
                align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.loginTime | date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="操作"
                align="center"
                width="200">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="updateUser(scope.row)">
                    编辑
                    </el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    rowindex
                    @click.native.prevent="deleteUser(scope.row._id,scope.$index)">
                    删除
                    </el-button>
                </template>
                <!-- @click.native.prevent="deleteRow(scope.$index, tableData)" -->
            </el-table-column>
        </el-table>
        <div class="toolbar">
            <el-pagination
            background
            layout="prev, pager, next"
            @current-change="pageI=>$store.dispatch('getUserList',{pageIndex:pageI,userName:search.userName})"
            :current-page="$store.state.pageInfo.pageIndex"
            :page-count="$store.state.pageInfo.pageSum">
            </el-pagination>
        </div>
        <!-- <addUser :visible.sync="addUserShow"></addUser> -->
        <editUser :visible.sync="addUserVisible" :userData="userData" :addOrUpdate="addOrUpdate"></editUser>
    </div>
</template>
<script>
export default {
    data(){
        return{
            addUserVisible:false,
            addOrUpdate:true,
            userData:null,
            search:{
                userName:"",
                pageIndex:1
            }
        }
    },
    mounted(){
        this.$store.dispatch('getUserList',{pageIndex:1});
    },
    methods:{
        deleteUser(id,index){
            this.$store.dispatch('deleteUser',{that:this,id,index})
        },
        updateUser(row){
            this.userData=row;
            // setTimeout(()=>{
            //     this.addOrUpdate=false;
            //     this.addUserVisible=true;
            // },0)
            this.addOrUpdate=false;
            this.addUserVisible=true;
            
        }
    }
}
</script>
<style lang="less" scoped>
</style>
