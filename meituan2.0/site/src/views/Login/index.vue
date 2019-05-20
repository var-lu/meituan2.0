<template>
  <div class="login">
    <!-- 头像 -->
    <div class="portrait">
    <img src="../../assets/img/my-active.png">
    <p>美团外卖</p>
    </div>
    <!-- 号码 -->
    <div class="wrappar">
     <div class="userName">
       <input id="phoneId" v-model="phoneId" placeholder="请输入手机号" type="text" >
       <span @click="sendCode()">发送验证码</span>
     </div>
     <div class="password">
       <input  v-model="password" ref="code" placeholder="请输入短信验证码" type="text">
     </div>
     <button id="gologin" class="gologin" @click="login()">登录</button> 
    </div>  
     <div class="agreement"><a href="#">查看美团协议与说明</a></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      phoneId:"",
      password:""
    }
  },
  methods: {
    sendCode(){
      console.log(1)
      this.$store.dispatch("getCode",this)
    },
    login(){
      this.$store.dispatch("login",this)
    },
    
  },
mounted(){
 
}
}
</script>
<style  lang="scss" scoped>
  .login{
    box-sizing: border-box;
    .portrait{
      width:100%;
      height:1.07rem;
      margin:0.65rem 0 0.55rem;
      img{
          width:0.72rem;
          height:0.72rem;
          margin-left:1.6rem;
          border:1px solid #f0f0f0;
      }
      p{
         margin-left:1.6rem;
         width:0.81rem;
         height:0.27rem;
         font-size: 20px;
         margin-top:0.05rem;
      }
    }
    .wrappar{
      width:100%;
      height:1.96rem;
      padding:0.19rem;
      box-sizing:border-box;
      .userName{
      width: 100%;
      height:0.34rem;
      padding: 0 0 0.096rem;
      font-size: 16px;
      border-bottom: 1px solid #eeeeee;
      input{
        border: none;
        width:2.56rem;
        height:0.24rem;
        padding:1px 0;
        font-size:0.15rem;
      }
      input::-webkit-input-placeholder{
        color: #e6e6e6;
        font-size:17px;
      }
      input:focus{
        border:none;
        outline:none;
      }
      span{
        display: inline-block;
        font-size:13px;
        height:0.2rem;
        background:#dcdcdc;
        color:#999999;
        text-align:center;
        padding:3px 6px;
        border-radius: 3px;
      } 
      }
      .password{
      width: 100%;
      height:0.5rem;
      padding: 0 0 0.096rem;
      font-size: 16px;
      border-bottom: 1px solid #eeeeee;
      input{
        border:none;
        width:100%;
        padding:1px 0;
        font-size:15px;
        margin-top:0.15rem;
      }
      input::-webkit-input-placeholder{
        color: #e6e6e6;
        font-size:17px;
      }
      input:focus{
        border:none;
        outline:none;
      }
      }
      .gologin{
        width:100%;
        height:0.45rem;
        border:none;
        background: #e5e5e5 ;
        font-size:16px;
        padding:1px 6px;
        color:#999999;
        border-radius: 5px;
        margin-top:0.26rem;
      }
    }
    .agreement{
          font-size:15px;
          margin:1.3rem 0 0 1.21rem;
          a{
            color:#b4b1b1;
            text-decoration: underline;
          }
    }
  }
</style>
