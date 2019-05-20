// 本组件是路由组件
<template>
    <div>
        <div class="toolbar " style="float:left">
            <el-form :inline="true" ref="search" class="demo-form-inline">
                <el-form-item label="店铺类别名称" prop="shopType">
                    <el-input v-model="search.shopType"  placeholder="店铺类别名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="$store.dispatch('getShopTypeList',search)" >查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addOrUpdate=true;addShopTypeVisible=true" >添加店铺类别</el-button>
                </el-form-item>
            </el-form>
        </div>
        
        <el-table
        v-loading="$store.state.isLoading"
        :data="$store.state.shop.shopTypeList"
        style="width: 100%;">
            <el-table-column
                v-if="false"
                prop="_id"
                label="店铺类别id"
                align="center">
            </el-table-column> 
            <el-table-column
                label="店铺类别缩略图"
                align="center">
                <template slot-scope="scope">
                    <img width="60" 
                    height="60" 
                    :src="$store.state.config.baseUrl+scope.row.shopTypePic"
                    alt="">
                </template>
            </el-table-column>         
            <el-table-column
                prop="shopType"
                label="店铺类别"
                align="center">
            </el-table-column>
            <el-table-column
                label="店铺类别添加时间"
                align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.addTime | date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="店铺类别修改时间"
                align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.updateTime | date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="操作"
                align="center"
                width="300">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click.native.prevent="updateShopType(scope.row)">
                    修改
                    </el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    rowindex
                    @click.native.prevent="deleteShopType(scope.row._id,scope.$index)">
                    删除
                    </el-button>
                    <el-button
                    size="mini"
                    type="primary"
                    rowindex
                    @click.native.prevent="deleteShopType(scope.row._id,scope.$index)">
                    添加店铺
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="toolbar">
            <pageInfo actionsName="getShopTypeList" :searchName="{shopType:search.shopType}"></pageInfo>
        </div>

        <addShopType :visible.sync="addShopTypeVisible" :shopData="shopData" :addOrUpdate="addOrUpdate"></addShopType>
    </div>
</template>
<script>
export default {
    data(){
        return{
            search:{
                shopType:"",
                pageIndex:1
            },
            addShopTypeVisible:false,
            addOrUpdate:true,
            shopData:null
        }
    },
    mounted(){
        this.$store.dispatch('getShopTypeList',{pageIndex:1});
    },
    methods:{
        deleteShopType(id,index){
            this.$store.dispatch('deleteShopType',{that:this,id,index})
        },
        updateShopType(row){
            this.shopData=row;
            this.addOrUpdate=false;
            this.addShopTypeVisible=true;
        }
    }
}
</script>
<style lang="less" scoped>

</style>
