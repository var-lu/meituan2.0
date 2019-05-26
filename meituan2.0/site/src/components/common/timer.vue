<template>
    <div>
        <p class="wait">等待支付</p>
        <p class="cancel">请在15分钟内完成支付，超时将自动取消。</p>
        <p class="wait-again">等待支付<span id="countdown" class="countdown"></span></p>
    </div>
</template>
<script>
    
export default {
    props:["timeShow"],
    name:"timer",
    mounted() {
    var timer = null
    var span = document.getElementById("countdown")
    var maxtime = 0.1 * 60; //15分钟，按秒计算，自己调整!   
             var CountDown=()=> {
                  if (maxtime >= 0) {
                      var minutes = Math.floor(maxtime / 60)>10?Math.floor(maxtime / 60):"0"+Math.floor(maxtime / 60);
                     var seconds = Math.floor(maxtime % 60)>10?Math.floor(maxtime % 60):"0"+Math.floor(maxtime % 60);
                     var msg =  minutes + ":" + seconds 
                     span.innerHTML = msg;
                         --maxtime;
                 } else{
                     clearInterval(timer);
                     this.$emit('update:timeShow',true)
                 }
             }
           timer = setInterval(CountDown, 1000); 
},
}
</script>
<style lang="scss" scoped>
     div{
         width:100%;
         height:0.72rem;
         .wait{
                color:#333333;
                font-size:19px
         }
         .cancel{
             color:#666;
             font-size:14px;
         }
         .wait-again{
             font-size:14px;
             color:#666
         }
         .countdown{
             display: inline-block;
             color: #ffb000;
             font-size:23px;
             margin-left:0.0.5rem;
         }
     }
</style>

