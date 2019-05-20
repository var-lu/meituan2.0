<template>
  <div id="app" >
    <router-view/>
     <!-- <router-link to="/shop">
            <div>店铺</div>
      </router-link>  -->
    <!-- <footNav v-if="footNavisShow"></footNav> -->
    <footNav v-if="(path=='/'||path=='/my'||path=='/order')"></footNav>
  </div>
</template>
<script>
import "@/assets/sass/style.scss";
import "@/assets/iconfont/iconfont.css";
  export default {
    	name : "App",
    data(){
      return{
        // footNavisShow:true

        path:""
      }
    },
    mounted(){

      this.path=this.$route.path;
    },
    watch:{
      $route(to,from){
        // if(to.path === "/shop"){
        //   this.footNavisShow = false;
        // }else{
        //   this.footNavisShow = true;
        // }
        this.path=to.path

      }
    },
    // 解决刷新页面数据丢失
    created(){
      // 从会话存储里再一次获取store
      if (sessionStorage.getItem("store")) {
        this.$store.replaceState(
          Object.assign(
            {},
            this.$store.state,
            JSON.parse(sessionStorage.getItem("store"))
          )
        );
        sessionStorage.removeItem("store")
      }

      // 监听页面是否刷新刷新了保存store到会话存储里
      window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state));
      })
    }
  }
</script>

<style lang="scss">
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
