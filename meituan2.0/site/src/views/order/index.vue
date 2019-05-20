<template>
  <div class="order" style="width:100%;height:100vh;background:#f0f0f0">
      <div class="outmost">
       <div class="up">
         <img class="mdl" src="../../assets/img/mdl.jpg"/>
         <P class="mdlname" @click="skipToshop ">北京麦丹劳沙河餐厅</p>
       </div>
       <div class="middle" @click="skipToDetails">
         <div class="middle_top"><span>周末全家满分早餐</span><span class="span_right">x1</span></div>
         <div class="middle_bottom"><span class="middle_time">2019-05-12 09:15</span><span class="span_right">实付￥75</span></div>
       </div>
       <div class="down">
         <p class="down_left">订单已取消</p>
         <p class="down_right">
           <a href="javascript:;">删除</a>
            <a class="again" href="javascript:;">再来一单</a>
         </p>
       </div>
      </div>
       <div class="outmost">
       <div class="up">
         <img class="mdl" src="../../assets/img/mdl.jpg"/>
         <P class="mdlname">北京麦丹劳沙河餐厅</p>
       </div>
       <div class="middle" @click="skipToDetails">
         <div class="middle_top"><span>周末全家满分早餐</span><span class="span_right">x1</span></div>
         <div class="middle_bottom"><span class="middle_time">2019-05-12 09:15</span><span class="span_right">实付￥75</span></div>
       </div>
       <div class="down">
         <p class="down_left">订单已取消</p>
         <p class="down_right">
           <a href="javascript:;">删除</a>
            <a class="again" href="javascript:;">再来一单</a>
         </p>
       </div>
      </div>
  </div>
</template>
<script>
export default {
  name:"order",
  methods: {
    skipToDetails(){
      this.$router.push({path:"/orderDetails"})
    },
    skipToshop(){
      this.$router.push({path:"/shop"})
    }
  },
}
</script>
<style lang="scss" scoped>
  
    .outmost{
      box-sizing: border-box;
      width:100%;
      height:1.74rem;                                                           
      padding: 0 0 0 0.15rem;
      background: #ffffff;
      border-top: 1px solid #d7d7d7;
      border-bottom: 1px solid #d7d7d7;
      margin-bottom:0.1rem;
     .up{
       width:100%;
       height:0.55rem;
       padding:0.1rem 0;
       border-bottom:1px solid #eeeeee;
      
      .mdl{
       width:0.35rem;
       height:0.35rem;
       float:left;
       border-radius: 50%;
      }
      .mdlname{
        box-sizing: border-box;
        font-size: 16px;
        width:3rem;
        height:0.35rem;
        float:right;
        text-align: left;
        padding:0.05rem 0;
      }
     }
     .middle{
       width:3.60rem;
       height:0.7rem;
       padding:0.1rem 0;
       border-bottom:1px solid #eeeeee;
       div{
         width:100%;
         display: flex;
         justify-content: space-between;
         span{
           display: block;
         }
         .span_right{
           margin-right: 0.1rem;
         }
       }
       .middle_top{
         font-size: 16px;
       }
       .middle_bottom{
         margin-top:0.1rem;
          font-size: 16px;
          .middle_time{
            font-size:12px;
            color:#999;
            margin-top:0.05rem;
          }
       }
     }
     .down{
       width: 3.60rem;
       height:0.47rem;
       display: flex;
       justify-content:space-between;
       font-size: 16px;
       padding:0.1rem 0 ;
     }
     .down_left{
       color:#999999
     }
     .down_right{
       margin-right:0.1rem;
       a{
         display: inline-block;
         margin-left:0.1rem;
         padding:0.03rem 0.1rem;
         border: 1px solid #eeeeee;
         border-radius: 0.05rem;
         color:#000000;
       }
       .again{
         background:#ffd161;
       }
     }
    }
</style>

