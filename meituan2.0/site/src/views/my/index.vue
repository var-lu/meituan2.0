<template>
    <div class="my">
        <div class="my_header">
            <div><img src="../../assets/img/head-defult.png" alt=""></div>
            <p>测试名</p>
        </div>
        <div class="my_nav">
            <ul>
                <li class="red_package"><router-link to="/my/redpackage"><img src="../../assets/img/my-redpackage.png"><p>美团红包</p></router-link></li>
                <li class="red_package"><router-link to="/my/address"><img src="../../assets/img/my-address.png"><p>收货地址</p></router-link></li>
                <li class="red_package"><router-link to="/my/question"><img src="../../assets/img/my-question.png"><p>常见问题</p></router-link></li>
                <li class="red_package"><router-link to="/my/agreement"><img src="../../assets/img/my-agreement.png"><p>美团协议与说明</p></router-link></li>
                <li class="red_package"><router-link to="/my/outlogin"><img src="../../assets/img/my-outlogin.png"><p>退出登录</p></router-link></li>            </ul>
        </div>
        <div class="my_phone">
            <div>客服电话：10109777</div>
            <p>服务时间：9:00-23:00</p>
        </div>
        <!-- 退出登录 -->
        <outLogin v-show="outLoginShow" :isShow.sync="outLoginShow"></outLogin>
    </div>
</template>
<script>
export default {
    name:"my",

    data(){
        return {
            outLoginShow:false
        }
    }}
</script>
<style scoped lang="scss">
    .my{
        width: 100%;
        height: 100vh;
        background: rgb(240, 240, 240);
        .my_header{
            width: 100%;
            padding: 0.37rem 0 0.18rem;
            background: url(../../assets/img/my-header-bg.png);
            background-size: 100% 100%;
            div{
                img{
                    width: 100%;
                    height: 100%;
                }
                width: 0.74rem;
                height: 0.74rem;
                border-radius: 100%;
                border: 0.04rem solid #ffe699;
                background: url(../../assets/img/head-defult.png) no-repeat ;
                background-size: 100% 100%;
                margin: auto;
                
            }
            p{
                text-align: center;
                font-size: 16px;
                margin-top: 0.08rem;
                cursor: pointer;
                color: #333333;
                max-width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .my_nav{
            padding-left: 0.12rem;
            background: #fff;
            text-align: left;
            font-size: 14px;
            li{
                padding: 0.1rem 0;
                line-height: 0.2rem;
                border-bottom: 0.01rem solid #e3e3e3;
                img{
                    width: 15px;
                    display: inline-block;
                    margin: 3px 10px 0 0;
                    float: left;
                }
                p{
                    color: #333333;
                }
            }
            li::after{
                display: inline-block;
                content: '>';
                float: right;
                margin-right: 0.22rem;
                font-size: 18px;
                line-height: 0.18rem;
                color: #AAAAAA;
                transform: scaleY(1.5) translateY(-75%);
            }
            li:nth-last-child(1){border: none;}
        }
        .my_phone{
            font-size: 0.14rem;
            text-align: center;
            div{
                margin-top: 0.2rem;
                color: #ffb000;
                padding: 10px 0;
                background: white;
            }
            p{
                font-size: 12px;
                padding: 0.1rem 0;
                color: #999999;
            }
        }
    }
</style>
