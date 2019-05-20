<template>
    <div class="container" @click="$emit('update:popupVisible',false)">
        <div class="free">
            <div>
                <img src="../../../assets/img/man.png" alt="">
                <span>满38减9;满68减12;满98减15;满158减17;满258减25</span>
            </div>
             <div>
                <img src="../../../assets/img/free.png" alt="">
                <span>折扣商品5折起</span>
            </div>
        </div>
        <div class="time">
            <h3>配送</h3>
            <p>起送 ￥20</p>
            <p>配送时间：10：25-22：55</p>
        </div>
        <div class="tall">
            <h3>公告</h3>
            <p>安格斯黑金系列重磅推出！100%进口安格斯牛肉，厚制16mm牛肉饼，开启全新美味盛宴！更有多款下午茶套餐，伴你度过悠然的下午时光，美味缤纷停不下来！店铺优惠与折扣不同享。</p>
        </div>
    </div>
</template>

<script>
export default {
    name : "shopPop",
    props : ['popupVisible']
}
</script>

<style lang="scss" scoped>
#app .mint-popup-bottom{
        width: 100%;
    }
    .container{
        width: 100%;
        text-align: left;
        padding: 0.2rem 0.15rem 0.35rem;
        .free{
            margin-bottom: 0.2rem;
            div{
                position: relative;
                margin-bottom: 0.06rem;
                img{
                    width: 0.15rem;
                    height: 0.15rem;
                    margin-right: 0.1rem;
                }
                span{
                    font-size: 12px;
                    line-height: 0.2rem;
                }
            }
        }
        .time{
            margin-bottom: 0.15rem;
        }
    }
    
</style>
