<template>
    <div class="redpackage">
        <backTop topBg="rgb(51, 51, 51)" topColor="rgb(255,255,255)" routeName="/my" topName="美团红包"></backTop>
        <p>
            使用兑换码 <span class="add_redpackage">添加红包</span>
        </p>
        <div v-if="true" class="have_redpackage">
            <div class="info">
                <div class="red">
                    <p class="left">会员红包</p>
                    <p class="right">￥<span class="price">5</span></p>
                </div>
                <div class="validity_period">
                    <p class="left"><i></i>有效期至<span class="time">2019.05.31</span></p>
                    <p class="right type">无门槛<i class="second"></i></p>
                </div>
                <div class="phone">
                    限非到店自取订单使用。限登录和收餐手机号为<span>15584107597</span>使用。
                </div>
            </div>
        </div>
        <div v-if="false" class="no_redpackage">
            <div class="img_box"></div>
            <p>暂无红包</p>
        </div>
         <div class="invalid_redpackage">
            <p class="left"><span class="right">没有更多有效的红包哦</span></p>|
            <p class="right"><span class="left">查看失效红包</span></p>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .redpackage{
        width: 100%;
        height: 100vh;
        background: #f0f0f0;
        font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
        >p{
            background: #fff8e9;
            color: #666;
            width: 100%;
            text-align: left;
            height: 0.3rem;
            line-height: 0.3rem;
            font-size: 13px;
            text-indent: 0.2rem;
            span{
                color: #466899;
            }
        }
        >p::after{
            content: ">";
            font-size: 18px;
            display: inline-block;
            color: #466899;
            transform: translate(-50%) scaleY(1.2);
            vertical-align: middle;
        }
        .have_redpackage{
            margin-top: 0.15rem;
            .info{
                background: #fff;
                margin: 0 0.1rem 0.1rem;
                padding: 0.18rem 0.1rem 0.1rem;
                border-radius: 0.05rem;
                height: 1.34rem;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                i{
                    position: absolute;
                    bottom: 0.05rem;
                    width: 0.1rem;
                    height: 0.1rem;
                    border-radius: 50%;
                    left: -0.15rem;
                    background: #eee;
                }
                .second{
                    right: -15px;
                    left: auto;
                }
                .red{
                    font-size: 20px;
                    color: red;
                    margin-bottom: 0.08rem;
                }
                .validity_period{ position: relative;}
                .phone{
                    margin-top: 0.2rem;
                    text-align: left;
                    line-height: 0.2rem;
                }
            }
        }
        .no_redpackage{
            width: 100%;
            margin-top: 0.75rem;
            color: #9a9a9a;
            font-size: 14px;
            .img_box{
                width: 1rem;
                height: 1rem;
                display: inline-block;
                background: url("../../assets/img/my-noredpackage.png");
                background-size: cover;
            }
            >p{margin-top: 0.06rem;}
           
        }
        .invalid_redpackage{
            clear: both;
            color: #9a9a9a;
            padding-top: 0.1rem;
            >.right{color:#466899;width: 48%;}
            >.left{letter-spacing: -0.01rem;width: 48%;}
        }
    }
</style>

