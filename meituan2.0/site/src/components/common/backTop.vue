<template>
    <div class="header" :style="{color:topColor,background:topBg}">
        <div class="back" @click="()=>{$router.push(routeName)}"></div>
        <p>{{topName}}</p>
    </div>
</template>
<script>
export default {
    props:["routeName","topName","topColor","topBg"]
}
</script>
<style lang="scss" scoped>
.header{
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 14px;
    // color: rgb(255, 255, 255);
    // background: rgb(51, 51, 51);
    position: relative;
    overflow: hidden;
    .back{
        width: 0.4rem;
        height: 0.5rem;
        position: absolute;
    }
    .back::after{
        content: "<";
        display: inline-block;
        font-size: 18px;
        transform: scaleY(1.7);
        color: #AAAAAA;
    }
}
</style>
