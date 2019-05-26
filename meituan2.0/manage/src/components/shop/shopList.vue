<template>
    <div>
        <div class="toolbar " style="float:left">
            <el-form :inline="true" ref="search" class="demo-form-inline">
                <el-form-item label="店铺名称" prop="shopName">
                    <el-input v-model="search.shopName"  placeholder="请输入要搜索的店铺"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="$store.dispatch('getShopList',search)" >查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addOrUpdate=true;visible=true" >添加店铺</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table
                v-loading="$store.state.isLoading"
                :data="shopList"
                :border="true"
                style="width: 100%">
            <!--<el-table-column
                    label="店铺id"
                    width="250">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row._id }}</span>
                </template>
            </el-table-column>-->
            <el-table-column
                v-if="false"
                prop="_id"
                label="店铺id"
                align="center"
                fixed>
            </el-table-column> 
            <el-table-column
                    label="店铺名称"
                    align="center"
                    fixed
                    width="150">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.shopName }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="店铺图片缩略图"
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
                <template slot-scope="scope">
                    {{scope.row.shopType}}
                </template>
            </el-table-column>
			<el-table-column
                label="店铺添加时间"
                align="center"
                width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.addTime | date }}</span>
                </template>
            </el-table-column>
			<el-table-column
                label="店铺修改时间"
                align="center"
                width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.updateTime | date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="操作"
                align="center"
                width="350"
                fixed="right">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click.native.prevent="updateShop(scope.row)">
                    修改
                    </el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    rowindex
                    @click.native.prevent="deleteShop(scope.row._id,scope.$index)">
                    删除
                    </el-button>
                    <el-button
                    size="mini"
                    type="primary"
                    rowindex
                    @click = "goodsTypeVisible=true;shopTypeId=scope.row.shopTypeId;shopId=scope.row._id">
                    添加商品类别
                    </el-button>
                     <el-button
                            size="mini"
                            type="primary"

                    >添加商品</el-button>
                </template>
            </el-table-column>
        </el-table>
        <pageInfoTwo :pageIndex="pageIndex" :pageSum="pageSum"></pageInfoTwo>
        <addShop :visible.sync="visible"></addShop>
        <!--<addGoodsType  v-if="goodsTypeVisible" :shopTypeId="shopTypeId" :shopId="shopId" :visible.sync="goodsTypeVisible"></addGoodsType>-->

    </div>
</template>

<script>
    // import bus from "@/bus"
    export default {
        name: "shop-list",
        data(){
            return {
                visible:false,
                goodsTypeVisible:false,
                shopList:[],
                search:"",
                pageIndex:1,
                pageSum:1,
                shopTypeId:"",
                shopId:""
            }
        },
        methods:{
            getShopList(pageI){
                this.$axios.get("shopList",{
                    params:{
                        pageIndex:pageI,
                        search:this.search
                    }
                }).then(data=>{
                	console.log(99999999999,data);
                    this.shopList = data.shopList;
                    this.pageIndex = data.pageIndex;
                    this.pageSum = data.pageSum;

                    // this.$store.commit("SET_PAGE_INFO",{
                    //     pageIndex:data.pageIndex,
                    //     pageSum:data.pageSum
                    // })
                })
            }
        },
        mounted(){
          console.log(222,this.getShopList(1));
          this.getShopList(1);
          this.$bus.$on("getShopList",this.getShopList);
        }
    }
</script>

<style scoped>

</style>