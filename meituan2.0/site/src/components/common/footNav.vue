<template>
    
    <div id="nav">
      <router-link :class="{active:index==0}" to="/">
        <div @click="changeIndex(0)" >
            <div class="def"></div>
            <div :class="{homeActive:index==0}"></div>
            <div>首页</div>
        </div>
      </router-link> 
      <router-link :class="{active:index==1}" to="/order">
        <div @click="changeIndex(1)">
          <div class="def order-def"></div>
          <div :class="{orderActive:index==1}"></div>
          <div>订单</div>
        </div>
      </router-link>
      <router-link :class="{active:index==2}" to="/my">
        <div @click="changeIndex(2)">
          <div class="def my-def"></div>
          <div :class="{myActive:index==2}"></div>
          <div>我的</div>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
    name : "footNav",
    data(){
      return{
        index:this.$store.state.footIndex
      }
    },
    methods:{
      changeIndex(index){
        this.$store.state.footIndex=this.index= index;
      }
    }
    // beforeMount(){
    //   console.log(this.$store.state.footIndex)
    //   this.index=this.$store.state.footIndex;
    // },
    // beforeDestroy(){
    //   this.$store.state.footIndex=this.index;
    // }
}
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  height: 0.49rem;
  background: #fafafa;
  position: fixed;
  z-index: 10;
  bottom: 0;
}
#nav a {
  float: left;
  width: 33%;
  font-weight: bold;
  color: #999;
  height: 0.49rem;
  >div{
    width: 100%;
    height: 100%;
    div:nth-child(1),div:nth-child(2){
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        margin-top: 0.02rem;
        background: url(../../assets/img/home.png) no-repeat;  
        background-size: contain;
    }
    div:nth-child(2){display: none;}
    div.homeActive{display: inline-block; background-image: url(../../assets/img/home-active.png)}
    div.order-def{background-image:  url(../../assets/img/order.png)}
    div.orderActive{display: inline-block; background-image: url(../../assets/img/order-active.png)}
    div.my-def{ background-image:  url(../../assets/img/my.png)}
    div.myActive{display: inline-block; background-image:  url(../../assets/img/my-active.png)}
    div:nth-child(3){
      color: #999;
      font-size: 12px;
      line-height: 0.14rem;
      -webkit-transform-origin: 50% 0;
      transform-origin: 50% 0;
      -webkit-transform: scale(0.83);
      transform: scale(0.83) translateY(-0.03rem);
    }
  }
}
#nav a.active{
  >div{
    div:nth-child(1){display:none;}
    div:nth-child(3){ color: #333;}
  }
}
</style>