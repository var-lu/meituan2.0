// 本组件是路由组件
<template>
    <div>
        <div class="toolbar " style="float:left">
            <el-form :inline="true" ref="search" class="demo-form-inline">
                <el-form-item label="商品类别名称" prop="goodsType">
                    <el-input v-model="search.goodsType"  placeholder="商品类别名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="$store.dispatch('getGoodsTypeList',search)" >查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addOrUpdate=true;addGoodsTypeVisible=true" >添加商品类别</el-button>
                </el-form-item>
            </el-form>
        </div>
        
        <el-table
        v-loading="$store.state.isLoading"
        :data="$store.state.goods.goodsTypeList"
        style="width: 100%;">
            <el-table-column
                v-if="false"
                prop="_id"
                label="商品类别id"
                align="center">
            </el-table-column> 
            <el-table-column
                label="商品类别缩略图"
                align="center">
                <template slot-scope="scope">
                    <img width="60" 
                    height="60" 
                    :src="$store.state.config.baseUrl+scope.row.goodsTypePic"
                    alt="">
                </template>
            </el-table-column>         
            <el-table-column
                prop="goodsType"
                label="商品类别"
                align="center">
            </el-table-column>
            <el-table-column
                label="商品类别添加时间"
                align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.addTime | date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="商品类别修改时间"
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
                    @click.native.prevent="updateGoodsType(scope.row)">
                    修改
                    </el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    rowindex
                    @click.native.prevent="deleteGoodsType(scope.row._id,scope.$index)">
                    删除
                    </el-button>
                    <el-button
                    size="mini"
                    type="primary"
                    rowindex
                    @click.native.prevent="deleteGoodsType(scope.row._id,scope.$index)">
                    添加商品
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="toolbar">
            <pageInfo actionsName="getGoodsTypeList" :searchName="{goodsType:search.goodsType}"></pageInfo>
        </div>

        <addGoodsType :visible.sync="addGoodsTypeVisible" :goodsData="goodsData" :addOrUpdate="addOrUpdate"></addGoodsType>
    </div>
</template>
<script>
export default {
    data(){
        return{
            search:{
                goodsType:"",
                pageIndex:1
            },
            addGoodsTypeVisible:false,
            addOrUpdate:true,
            goodsData:null
        }
    },
    mounted(){
        this.$store.dispatch('getGoodsTypeList',{pageIndex:1});
    },
    methods:{
        deleteGoodsType(id,index){
            this.$store.dispatch('deleteGoodsType',{that:this,id,index})
        },
        updateGoodsType(row){
            this.goodsData=row;
            this.addOrUpdate=false;
            this.addGoodsTypeVisible=true;
        }
    }
}
</script>
<style lang="less" scoped>

</style>
