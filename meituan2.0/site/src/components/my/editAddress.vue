<template>
    <div class="edit_address">
     
       <addressForm></addressForm>
       <div class="save">保存</div>
       <div class="delete">删除</div>
       <div class="back" @click="$router.push('/my/address')">返回</div>
    </div>
</template>
<script>
export default {
     
    
}
</script>
<style lang="scss" scoped>
  .edit_address{
    >div{
      border-radius: 4px;
      text-align: center;
      height: .4rem;
      line-height: .4rem;
      border: 1px solid #FFB000;
      border-radius: 4px;
      margin: 25px 15px 15px 15px;
    }
    .save{background-image: linear-gradient(135deg, #FFD266 0%, #FFBD27 100%);}
    .delete{margin: 0 15px 0 15px;}
    .back{margin:15px;}
  }
</style>

