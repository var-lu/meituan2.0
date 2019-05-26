<template>
<div class="order">
    <!-- 头部 -->
      <div class="orderTop">
        <div class="show">
            <div v-show="timeShow">
            <p class="show_one">订单已取消 ></p>
            <p class="show_two">您的订单已取消</p>
            </div>
            <timer v-if = "!timeShow" :timeShow.sync="timeShow"></timer>
        </div>
        <div class="button">
            <input type="button" value="逛逛别家"/>
            <input type="button" v-show = "!timeShow" value="立即付款"/>
            <input type="button" value="再来一单"/>
        </div>
      </div>
      <!-- 人工客服 -->
      <div class="problem">
          <div class="problem_top">
              <strong class="problem_top_left">常见问题</strong>
              <span class="problem_top_right">在线客服></span>
          </div>
          <div class="problem_bottom">
          <ul class="problem_button">
              <li><a href="javascript:;">无法支付</a></li>
              <li><a href="javascript:;">红包无法使用</a></li>
              <li><a href="javascript:;">新用户首单减免</a></li>
              <li><a href="javascript:;">订单那些支付方式</a></li>
              <li><a href="javascript:;">退款后红包处置</a></li>
              <li><a href="javascript:;">外卖新用户是什么</a></li>
          </ul>
          </div>
      </div>
      <!-- 订单明细 -->
      <div class="orderdetails">
          订单明细
      </div>
      <div class="name-txt">北京麦当劳沙河店</div>
      <div class="order-price">
      <p class="price-name"><img src="../../assets/img/zhe.png"/>周末全家满分早餐(周末全家满分早餐)</p>
      <p class="xiangxi">
          <span class="count">1份</span>
          <span class="amount"><del>￥90</del></span>
          <span class="price">￥66</span>
      </p>
      </div>
      <div class="box-fee">
          <span>餐盒费</span>
          <span>￥0</span>
      </div>
      <div class="distribution-fee">
          <span>配送费</span>
          <span>￥9</span>
      </div>
      <div class="order-total">
        <span class="total-one">总计: ￥99</span>
        <span class="total-two">优惠：<span>-￥24</span></span>
        <span class="total-three">实付：<span>￥75</span></span>
      </div>
      <!-- 配送信息 -->
       <div class="orderdetails">
          配送信息
      </div>
      <div class="dellverytime">
          送餐时间 立即配送
      </div>
      <div class="dellveryaddress">
          <div class="label">配送地址</div>
          <div class="label-right">
              <p>李泽涵(先生) 17645083752</p>
              <p>北京科技职院(1231)</p>
          </div>
      </div>
      <div class="label-with-txt"><span>订单编号</span> <span>1870 0412 0213 1234</span></div>
      <div class="label-with-txt"><span>下单时间</span> <span>2019-05-20 13:14</span></div>
      <div class="label-with-txt"><span>支付方式</span> <span>在线支付</span></div>
</div>
</template>
<script>
export default {
    name :"nextorder",
    data(){
        return{
            isShow:false,
            timeShow:true
        }
    },
    mounted() {
        this.timeShow=this.$route.query.timeShow;

    }
    
}
</script>
<style lang="scss" scoped>
     div{
         box-sizing: border-box;
     }
     p{
         box-sizing: border-box;
     }
     span{
         box-sizing: border-box;
     }
     .order{
         width:100%;
         background: #f0f0f0;
         display: flex;
         flex:1;
         flex-direction: column;
      .orderTop{
          width:100%;
          height:1.38rem;
          padding:0.2rem 0.15rem 0;
          background:#ffffff;
      .show{
          width:3.46rem;
          height:0.58rem;
          margin: 0 0 0.14rem;
         .show_one {
              margin-bottom: 0.05rem;
              font-size:19px;
          }
          .show_two{
              font-size:14px;
          }

      }  
      .button{
          width:100%;
          height:0.38rem;
          margin: 0 0 0.08rem;
          display: flex;
          justify-content:space-around;
          input{
              width:0.92rem;
              height:0.37rem;
              border: 1px solid #eeeeee;
              background:#ffffff;
              font-size:16px;
              border-radius: 5px;
          } 
      }     
    }
    .problem{
        width:100%;
        height:1.37rem;
        background:#ffffff;
        margin:0.1rem 0 0;
        border-top:1px solid #d7d7d7;
        border-bottom:1px solid #d7d7d7;
        .problem_top{
            width:92%;
            margin:0 0.15rem;
            padding:0.1rem 0;
            font-size:15px;
            display: flex;
            justify-content:space-between;
            border-bottom: 1px solid #e0e0e0;
        }
        .problem_bottom{
            width:3.72rem;
            height:0.82rem;
            padding:0.16rem 0.1rem;
             .problem_button{
                 width:100%;
                 height:100%;
                 display: flex;
                 flex-wrap: wrap;
                 justify-content: space-between;
                 a{
                     display: block;
                     line-height: 0.25rem;
                     color:#333;
                     margin-bottom: 0.1rem;
                     border: 1px solid #dab8b8;
                     width:1.1rem;
                     height:0.25rem;
                     background: #fafafa;
                     font-size:13px;
                 }
             }
        }
       
    }
     .orderdetails{
         box-sizing: border-box;
         width:100%;
         height:0.3rem;
         color:#333;
         font-size:15px;
         padding:0 0 0 0.15rem;
         text-align: left;
         line-height:0.3rem;
     }
     .name-txt{
         width:3.74rem;
         height:0.36rem;
         padding: 0.05rem 0.15rem;
         text-align: left;
         font-size:15px;
         background:#ffffff;
         border-bottom: 1px solid #eeeeee;
         line-height:0.36rem;
     }
     .order-price{
         width:3.74rem;
         height:0.32rem;
         background:#ffffff;
         border-bottom:1px solid #eeeeee;
         font-size:15px;
         text-align: left;
         padding:0 0.15rem;
         line-height: 0.32rem;
         display: flex;
         .price-name{
             width:2.30rem;
             height:0.32rem;
             overflow:hidden;
             line-height: 0.32rem;
             img{
             width:0.13rem;
             height:0.15rem;
             margin-right:0.10rem
           }
         }
         .count{
             display: inline-block;
             width:0.33rem;
             height:0.32rem;
             line-height: 0.32rem;
             text-align: left;
         }
         .amount{
             display: inline-block;
             width:0.45rem;
             height:0.32rem;
             line-height: 0.32rem;
             text-align: right;
             color:#999999;
         }
         .price{
             display: inline-block;
             width:0.45rem;
             height:0.32rem;
             line-height: 0.32rem;
             text-align: right;
         }
     }
     .box-fee{
          width:3.74rem;
         height:0.32rem;
         background: #ffffff;
        display: flex;
        justify-content: space-between;
        padding:0 0.15rem;
        border-bottom: 1px solid #eeeeee;
        font-size:15px;
        line-height:0.32rem;
     }
     .distribution-fee{
         width:3.74rem;
         height:0.41rem;
         background: #ffffff;
        display: flex;
        justify-content: space-between;
        padding:0 0.15rem;
        border-bottom: 1px solid #eeeeee;
        font-size:15px;
        line-height: 0.41rem;
     }
     .order-total{
         width:3.74rem;
         height:0.41rem;
         border-bottom:1px solid #eeeeee;
         background:#ffffff;
         padding:0 0.15rem;
         display:flex;
       .total-one{
           display: block;
           width:0.75rem;
           height:0.4rem;
           line-height:0.4rem;
           color:#777;
           font-size:14px;
           margin-right: 0.1rem;
       }
       .total-two{
           display: block;
           width:1.70rem;
           height:0.4rem;
           line-height:0.4rem;
           color:#777;
           font-size:14px;
           text-align: left;
           span{
               color:#ffb000
           }
       }
       .total-three{
            display: block;
           width:0.75rem;
           height:0.4rem;
           line-height:0.4rem;
           color:#777;
           font-size:14px;
           span{
               color:#ffb000; 
           }
       }
     }
     .dellverytime{
          width:3.74rem;
         height:0.46rem;
         background:#ffffff;
         line-height:0.46rem;
         font-size:15px;
         text-align: left;
         padding:0 0.15rem;
         border-bottom: 1px solid #eeeeee;
     }
     .dellveryaddress{
         width:3.74rem;
         height:0.6rem;
         background:#ffffff;
         font-size:15px;
         text-align: left;
         padding:0 0.15rem;
         border-bottom: 1px solid #eeeeee;
        .label{
            float:left;
             margin-right:0.1rem;
        }
        .label-right{
            float:left;
           p{
               height:0.17rem;
               margin: 0 0 0.05rem;
           }
        }
     }
     .label-with-txt{
         width:3.74rem;
         height:0.46rem;
         padding: 0 0.15rem;
         background:#ffffff;
         text-align: left;
         font-size:15px;
         line-height: 0.46rem;
         span{
             margin-right:0.1rem;
         }
     }

 }
</style>

