<template>
    <div>
        <div class="toolbar" style="float:left">
            <el-form :inline="true" ref="search" class="demo-form-inline">
                <el-form-item label="管理员名称" prop="adminName">
                    <el-input v-model="search.adminName"  placeholder="管理员名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="$store.dispatch('getAdminLog',search)" >查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        
        <el-table
        v-loading="$store.state.isLoading"
        :data="$store.state.admin.adminLog"
        style="width: 100%;">
            <el-table-column
                v-if="false"
                prop="_id"
                label="日志id"
                align="center">
            </el-table-column>
            <el-table-column
                prop="adminId"
                label="管理员编号"
                align="center">
            </el-table-column>
            <el-table-column
                prop="adminName"
                label="姓名"
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
            @current-change="pageI=>$store.dispatch('getAdminLog',{pageIndex:pageI,adminName:search.adminName})"
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
                adminName:"",
                pageIndex:1
            }
        }
    },
    mounted(){
        this.$store.dispatch('getAdminLog',{pageIndex:1});
    },
    methods:{
        deleteLog(id,index){
            this.$store.dispatch('deleteAdminLog',{that:this,id,index})
        }
    }
}
</script>
<style lang="less" scoped>

</style>
