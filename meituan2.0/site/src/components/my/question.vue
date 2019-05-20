<template>
    <div class="question">
        <backTop topBg="#fff" topColor="#333" routeName="/my" topName="常见问题"></backTop>
        <ul class="question_info">
            <li class="pay">
                <h2 
                    @click="isShow=!isShow"
                    :class="{show:isShow===true}">
                    <i class="iconfont">&#xe64c;</i>
                    支付问题 
                    <i class="iconfont right">&#xe66f;</i>
                </h2>
                <ul v-show="isShow">
                    <li>
                        <h3>Q:为什么我的账户存在异常，无法下单？</h3>
                       <p>包含以下行为者，系统将自动封禁</p> 
                    </li>
                     <li>
                        <h3>Q:为什么我的账户存在异常，无法下单？</h3>
                       <p>包含以下行为者，系统将自动封禁</p> 
                    </li>
                </ul>
            </li>
            <li class="order">
                <h2 class="title"><i class="iconfont bold">&#xe62a;</i>订单问题<i class="iconfont right">&#xe66f;</i></h2>
            </li>
            <li class="discount">
                <h2 class="title"><i class="iconfont">&#xe645;</i>优惠问题<i class="iconfont right">&#xe66f;</i></h2>
            </li>
            <li class="other">
                <h2 class="title"><i class="iconfont">&#xe60f;</i>其他问题<i class="iconfont right">&#xe66f;</i></h2>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:false
        }
    }
}
</script>
<style lang="scss" scoped>
    .question{
        position: relative;
        min-height: 100vh;
        background-color: #efefef !important;
        color: #2f2f2f;
    }
    .header{
        font-size: 17px !important;
        font-weight: bold;
    }
    ul.question_info{
        border-top: 0.01rem solid #dddddd;
        >li{
            h2{
                background-color: #ffffff;
                font-size: 14px;
                font-weight: normal;
                padding: 0 0.1rem;
                height: 0.44rem;
                line-height: 0.44rem;
                text-align: left;
                border-bottom: 0.01rem solid #dddddd;
                i{
                    color: #777777;
                    font-size: 19px;
                    vertical-align: middle;
                    padding-right: 0.1rem;
                }
                .bold{color: #2f2f2f;}
                i.right{
                    font-size: 14px;
                    padding-right: 0;
                    transition: transform 0.2s; 
                }
            }
            .show .right{ transform: rotate(180deg)}
            ul{
                padding-left: 0.15rem;
                margin-top: -0.01rem;
                text-align: left;
                li{
                    padding: 0.15rem 0.39rem 0.14rem 0;
                    border-top: 0.01rem solid #dddddd;
                    h3{
                        font-size: 15px;
                        font-weight: normal;
                        color: #333333;
                    }
                    p{
                        font-size: 12px;
                        color: #888888;
                        margin-top: 0.13rem;
                    }
                }
            }
        }
    }
</style>

