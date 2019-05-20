<template>
    <div class="address_add">
        <addressForm></addressForm>
        <div class="save">保存</div>
        <div class="back" @click="$router.push('/my/address')">返回</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .address_add{
        >div{
        border-radius: 4px;
        text-align: center;
        height: .4rem;
        line-height: .4rem;
        border: 1px solid #FFB000;
        border-radius: 4px;
        margin: 25px 15px 15px 15px;
        }
        // 加透明
        .save{background-image: linear-gradient(135deg, #FFD266 0%, #FFBD27 100%);opacity: .45;}
        .back{margin:15px;}
    }
</style>
