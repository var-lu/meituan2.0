<template>
    <div>
        <div class="merchant">
            <div class="top">
                <div><img src="../../assets/img/dz.png" alt=""><span>沙河镇沙阳路1号</span><a href="javascript:;"><img src="../../assets/img/phone.png" alt=""></a></div>
                <div @click="popupVisible=true"><img src="../../assets/img/aq.png" alt=""><span>查看食品安全档案</span><i class="el-icon-arrow-right"></i></div>
            </div>
            <div class="center">
                <div class="time">
                    <img src="../../assets/img/time.png" alt="">
                    <p>
                        配送时间： 00:00-04:45,05:15-10:15,10:30-23:59
                    </p>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom-t" @click="popupVisible=true">
                    <img src="../../assets/img/tall.png" alt="">
                    <p>
                        安格斯黑金系列重磅推出！100%进口安格斯牛肉，厚制16mm牛肉饼，开启全新美味盛宴！更有多款下午茶套餐，伴你度过悠然的下午时光，美味缤纷停不下来！店铺优惠与折扣不同享。
                    </p>
                </div>
                <div class="bottom-c">
                    <img src="../../assets/img/server.png" alt="">
                    <div class="server">
                        <p>商家服务</p>
                        <div class="server-detail">
                            <div><img src="../../assets/img/server1.png" alt="">该商户为品牌商户</div>
                            <div><img src="../../assets/img/server2.png" alt="">该商户支持在线支付</div>
                            <div><img src="../../assets/img/server3.png" alt="">本店支持开发票，开票金额0元起</div>
                        </div>
                    </div>
                </div>
                <div class="bottom-b">
                    <div>
                        <img src="../../assets/img/man.png" alt="">
                        <span>满 30 减 5，满 60 减 15(在线支付专享)</span>
                    </div>
                    <div>
                        <img src="../../assets/img/free.png" alt="">
                        <span>折扣商品 3.2 折起(在线支付专享)</span>
                    </div>
                    <div>
                        <img src="../../assets/img/server2.png" alt="">
                        <span>该商户支持在线支付</span>
                    </div>
                    <div>
                        <img src="../../assets/img/server3.png" alt="">
                        <span>本店支持开发票，开票金额0元起</span>
                    </div>
                </div>
            </div>
        </div>
        <mt-popup
            v-model="popupVisible"
            position="bottom"
            popup-transition="popup-fade"
            >
        <shopPop :popupVisible.sync="popupVisible"></shopPop>
     </mt-popup>
    </div>
</template>

<script>
export default {
    name : "merchant",
    data(){
        return{
            popupVisible : false
        }
    }
}
</script>

<style lang="scss" scoped>
    .merchant{
        overflow-x: hidden;
        overflow-y: auto;
        line-height: 1.5;
        padding-bottom: 0.6rem;
        position: relative;
        z-index: 3;
        height: 6.27rem;
        
        .top{
        background: white;
        color: #000;
        margin-left: 0.15rem;
        padding-right: 0.15rem;
        overflow: hidden;
        position: relative;
        padding-bottom: 0.1rem;
        div{
            margin: 0.08rem 0;
            position: relative;
            text-align: left;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            img{
                width: 0.14rem;
                height: 0.14rem;
                margin-right: 0.1rem;
                align-self: center;
            }
            span{
                flex : 1;
            }
            a{
                display: inline-block;
                width: 0.5rem;
                height: 0.4rem;
                position: relative;
                img{
                    width: 0.2rem;
                    height: 0.2rem;
                    position:absolute;
                    bottom: 0.1rem;right: 0;
                    align-self: center;
                }
            }
        }
    }
    .center{
        background: white;
        color: #000;
        margin-left: 0.15rem;
        padding-right: 0.15rem;
        overflow: hidden;
        position: relative;
        font-size: 14px;
        .time{
            display: flex;
            position: relative;
            padding: 0.18rem 0;
            border-bottom: 1px solid #eee;
            img{
                width: 0.14rem;
                height: 0.14rem;
                margin-right: 0.1rem;
                align-self: center;
            }
        }
    }
    .bottom{
        background: white;
        color: #000;
        margin-left: 0.15rem;
        padding-right: 0.15rem;
        overflow: hidden;
        position: relative;
        .bottom-t{
            position: relative;
            font-size: 0px;
            margin: 0.18rem 0;
            display: flex;
            img{
                width: 0.14rem;
                height: 0.14rem;
                margin-right: 0.1rem;
                align-self: center;
            }
            p{
                flex: 1;
                 white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
                padding-right: 15px;
                box-sizing: border-box;
                line-height: 20px;
                word-wrap: break-word;
                font-size: 14px;
            }
        }
        .bottom-c{
            position: relative;
            margin: 0.18rem 0;
            display:flex;
            img{
                width: 0.14rem;
                height: 0.14rem;
                margin-right: 0.1rem;
                margin-top: 0.02rem;
            }
            .server{
                flex: 1;
                position: relative;
                padding-left: 4em;
                line-height: 0.2rem;
                word-wrap: break-word;
                font-size: 14px;
                text-align: left;
                p{
                    position: absolute;
                    left: 0;
                }
                .server-detail{
                    display: inline-block;
                    padding-left: 0.15rem;
                    vertical-align: top;
                    div{
                        color: #333;
                        font-size: 12px;
                    }
                }
            }
        }
        .bottom-b{
            background: #fff;
            margin: 0.18rem 0;
            padding-bottom: 0.1rem;
            border-bottom: 1px solid #eee;
            div{
                margin-bottom: 0.05rem;
                width: 90%;
                display: flex;
                align-items: flex-start;
                img{
                    width: 0.15rem;
                    height: 0.15rem;
                    align-self: center;
                }
                span{
                    color: #333;
                    width: 90%;
                    display: inline-block;
                    text-align: left;
                    font-size: 14px;
                    margin-left: 0.07rem;
                    line-height: 0.2rem;
                    word-wrap: break-word;
                }
            }
        }
    }
    }
</style>
