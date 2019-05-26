<template>
    <div class="toolbar">
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="currentChange"
                :current-page="pageIndex"
                :page-count="pageSum"
        >
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "page-info-two",
        props:["pageIndex","pageSum"],
        methods:{
            currentChange(pageIndex){
                console.log(33333);
                this.$bus.$emit("getShopList",pageIndex)
            }
        }
    }
</script>

<style scoped>

</style>