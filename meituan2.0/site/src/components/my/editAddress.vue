<template>
    <div class="edit_address">
     
       <form>
        <div class="address_username">
        <label>联系人：
            <input type="text" name="userName"  v-model="form.userName">
        </label>
        </div>
        <div class="address_sex">
        <input type="radio" id="man" value="1" ref="man" name="sex" hidden>
        <div class="left">
            <label for="man" @click="manRadioChecked=true;womanRadioChecked=false;"><i :class="{checked:manRadioChecked}"></i>先生</label>
        </div>
        <input type="radio" id="woman" value="2" ref="woman" name="sex" hidden>
        <div class="right">
            <label for="woman" @click="manRadioChecked=false;womanRadioChecked=true;"><i :class="{checked:womanRadioChecked}"></i>女士</label>
        </div>
        </div>
        <div>
        <label>手机号：
            <input type="text" name="phone"  v-model="form.phoneNumber">
        </label>
        </div>
        <div class="receive_address">
        <label>收货地址：
            <span></span>
            <input type="text" name="address"  v-model="form.location">
        </label>
        </div>
        <div>
        <label>门牌号：
            <input type="text" name="addressInfo" ref="plate" v-model="form.plate">
        </label>
        </div>
    </form>
       <div class="save" @click="reviseInfo()">保存</div>
       <div class="delete" @click="deleteOne()">删除</div>
       <div class="back" @click="$router.push('/my/address')">返回</div>
    </div>
</template>
<script>
export default {
     data(){
       return{
         manRadioChecked:true,
        womanRadioChecked:false,
         form:{
          id:this.$route.query.id,
          userName:"",
          phoneNumber:"",
          location:"",
          plate:"",
          phoneId:localStorage.phoneId
        }
       }
     },
     methods: {
       reviseInfo(){
         console.log(this.form)
         this.$store.dispatch("reviseInfo",this.form)
       },
       deleteOne(){
         this.$store.dispatch("deleteOne",this.form.id)
       }
     },
     mounted(){
      //  console.log(this.$store.state.location.info,77777777)
        console.log(this.$route.query.id,333);
       this.$store.dispatch("getInfo",this)
       
     }
    
}
</script>
<style lang="scss" scoped>
form{
      padding-left: .15rem;
      >div{
        height: .52rem;
        line-height: .52rem;
        border-bottom: .5px solid #e4e4e4;
        font-size: 16px;
        text-align: left;
        input{
          border: none;
          outline: none;
          text-indent: .2rem;
          font-size: 16px;
        }
        i{
          display: inline-block;
          width: .17rem;
          height: .17rem;
          background: url("../../assets/img/radio-no-checked.png") no-repeat center;
          background-size: cover;
          vertical-align: middle;
          margin-right: .08rem;
        }
        .checked{
          background-image: url("../../assets/img/radio-checked.png");
        }
        
      }
      .address_sex{
        div{
          width: 49%;
          height: 100%;
          text-align: right;
          padding: 0 .3rem;
        }
        .right{
          text-align: left;
        }
      }
      .receive_address {
        input{
          text-indent: 0;
        }
        span{
          width: 17px;
          height: 17px;
          display: inline-block;
          vertical-align: middle;
          background: url("../../assets/img/my-address-yellow.png") no-repeat ;
          background-size: contain;
          margin-left: -.1rem;
        }
      }
      
    }
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

