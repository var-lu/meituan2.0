<template>
    <div>
        <div class="toolbar" style="float:left">
            <el-form :inline="true" ref="search" class="demo-form-inline">
                <el-form-item label="用户名称" prop="userName">
                    <el-input v-model="search.userName"  placeholder="用户名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="$store.dispatch('getUserLog',search)" >查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        
        <el-table
        v-loading="$store.state.isLoading"
        :data="$store.state.user.userLog"
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
                prop="userName"
                label="性别"
                align="center">
            </el-table-column>
            <el-table-column
                prop="userName"
                label="头像"
                align="center">
            </el-table-column>
            <el-table-column
                prop="userName"
                label="生日"
                align="center">
            </el-table-column>
            <el-table-column
                prop="userName"
                label="手机号"
                align="center">
            </el-table-column>
            <el-table-column
                prop="userName"
                label="注册时间"
                align="center">
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
                align="center">
                <template slot-scope="scope">
                    <el-button
                    size="mini">
                    编辑
                    </el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    rowindex
                    @click.native.prevent="deleteLog(scope.row._id,scope.$index)">
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
            @current-change="pageI=>$store.dispatch('getUserLog',{pageIndex:pageI,userName:search.userName})"
            :current-page="$store.state.pageInfo.pageIndex"
            :page-count="$store.state.pageInfo.pageSum">
            </el-pagination>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            search:{
                userName:"",
                pageIndex:1
            }
        }
    },
    mounted(){
        // this.$store.dispatch('getUserLog',{pageIndex:1});
    },
    methods:{
        deleteLog(id,index){
            this.$store.dispatch('deleteUserLog',{that:this,id,index})
        }
    }
}
</script>
<style lang="less" scoped>

</style>
