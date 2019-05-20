<template>
    <el-pagination
    background
    layout="prev, pager, next"
    @current-change="pageI=>$store.dispatch(actionsName,{...searchName,pageIndex:pageI})"
    :current-page="$store.state.pageInfo.pageIndex"
    :page-count="$store.state.pageInfo.pageSum">
    </el-pagination>
</template>
<script>
export default {
    name:"pageInfo",
    props:["actionsName","searchName"],
    
}
</script>
