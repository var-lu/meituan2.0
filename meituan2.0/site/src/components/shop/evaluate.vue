<template>
    <div style="background:#eee">
        <div class="shopGrade">
            <div class="shopGrade-left">
                <div class="grade">4.4</div>
                <div class="type">商家评分</div>
            </div>
            <div class="shopGrade-center">
                <p v-for="item in texts">
                    <span>{{item}}</span>
                     <span>
                         <el-rate
                            v-model="value"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                        </el-rate>
                     </span>
                </p>
            </div>
            <div class="shopGrade-right" style="border-left:solid 1px #eee;padding-left:0.22rem;width:0.7rem">
                <div class="grade" style="color:#999">4.7</div>
                <div class="type">配送评分</div>
            </div>
        </div>
        <div class="evaluate-type">
            <span v-for="(item,i) in evaluateTypeArr" @click="changeType(i)" :class="{'active-type':index === i}">{{item}}</span>
        </div>
        <div class="evaluate-detail">
            <ul>
                <li>
                    <div class="context">
                        <div class="userImg">
                            <img src="../../assets/img/user-img.png" alt="">
                        </div>
                        <div class="detail">
                            <div>
                                <span>用户名</span>
                                <span>2019-5-14</span>
                            </div>
                            <div style="margin-top:0.07rem">
                                <span>34分钟送达</span>
                            </div>
                            <div>
                               老板，是不是有点过分了这油泡着，真下不去嘴#麻婆豆腐#
                            </div>
                            <div>
                                <div class="goodsImg">
                                    <div></div>
                                </div>
                                <div class="goodsImg">
                                    <div></div>
                                </div>
                            </div>
                            <div>
                                <i></i>
                                <span>火爆圆白菜</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="context">
                        <div class="userImg">
                            <img src="../../assets/img/user-img.png" alt="">
                        </div>
                        <div class="detail">
                            <div>
                                <span>用户名</span>
                                <span>2019-5-14</span>
                            </div>
                            <div style="margin-top:0.07rem">
                                <span>34分钟送达</span>
                            </div>
                            <div>
                               老板，是不是有点过分了这油泡着，真下不去嘴#麻婆豆腐#
                            </div>
                            <div>
                                <div class="goodsImg">
                                    <div></div>
                                </div>
                                <div class="goodsImg">
                                    <div></div>
                                </div>
                            </div>
                            <div>
                                <i></i>
                                <span>火爆圆白菜</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="context">
                        <div class="userImg">
                            <img src="../../assets/img/user-img.png" alt="">
                        </div>
                        <div class="detail">
                            <div>
                                <span>用户名</span>
                                <span>2019-5-14</span>
                            </div>
                            <div style="margin-top:0.07rem">
                                <span>34分钟送达</span>
                            </div>
                            <div>
                               老板，是不是有点过分了这油泡着，真下不去嘴#麻婆豆腐#
                            </div>
                            <div>
                                <div class="goodsImg">
                                    <div></div>
                                </div>
                                <div class="goodsImg">
                                    <div></div>
                                </div>
                            </div>
                            <div>
                                <i></i>
                                <span>火爆圆白菜</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="context">
                        <div class="userImg">
                            <img src="../../assets/img/user-img.png" alt="">
                        </div>
                        <div class="detail">
                            <div>
                                <span>用户名</span>
                                <span>2019-5-14</span>
                            </div>
                            <div style="margin-top:0.07rem">
                                <span>34分钟送达</span>
                            </div>
                            <div>
                               老板，是不是有点过分了这油泡着，真下不去嘴#麻婆豆腐#
                            </div>
                            <div>
                                <div class="goodsImg">
                                    <div></div>
                                </div>
                                <div class="goodsImg">
                                    <div></div>
                                </div>
                            </div>
                            <div>
                                <i></i>
                                <span>火爆圆白菜</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : "shopEvaluate",
     data() {
      return {
        value: 4.5,
        index : 0,
        texts : ["口味","包装"],
        evaluateTypeArr : ['全部(5336)','好评(5336)','差评(5336)','有图评价(5336)','味道赞(5336)','服务好(5336)','菜品差(5336)','贵(5336)']
      }
    },
    methods:{
        changeType(i){
            this.index = i;
        }
    }
}
</script>

<style lang="scss" scoped>
    .shopGrade{
        background-color: #FFF;
        width: 100%;
        display: flex;
        margin-bottom: 0.1rem;
        padding: 0.15rem 0.23rem;
        justify-content: space-between;
        .shopGrade-left,.shopGrade-right{
            height: 0.5rem;
            width: 0.48rem;
            .grade{
                font-weight: normal;
                font-size: 27px;
                height: 0.3rem;
                width: 0.48rem;
                line-height: 0.3rem;
                color: #FFB000;
                text-align: center;
                margin-bottom: 0.01rem;
            }
            .type{
                width: 0.48rem;
                text-align: center;
                font-size: 12px;
                color: #999;
            }
        }
        .shopGrade-center{
            flex: 1;
            padding-left: 0;
            position: relative;
            text-align: left;
            padding-left: 0.23rem;
            p{
                white-space: nowrap;
                min-height: 0.16rem;
                position: relative;
                margin: 0.03rem 0 0.1rem;
                span:nth-child(1){
                    color: #333;
                    position: absolute;
                    left: 0 ;top: 0;
                }
                span:nth-child(2){
                    display: inline-block;
                    position: absolute;
                    left: 0.4rem;top: 0;
                }
            }
        }
    }
    .evaluate-type{
        padding: 0.15rem 0.14rem 0.05rem 0.14rem;
        background: #fff;
        margin-top: 0.1rem;
        color: #666;
        position: relative;
        text-align: left;
        border-bottom: 0.01rem solid #eee;
        span{
            display: inline-block;
            vertical-align: middle;
            padding: 0 0.12rem;
            height: 0.26rem;
            line-height: 0.27rem;
            margin: 0 0.1rem 0.1rem 0;
            background: #FFF;
            font-size: 13px;
            color: #666;
            text-align: center;
            position: relative;
        }
        span.active-type{
            color: #FFB000;
            background: #fffbf1;
        }
        span::before{
            content: '';
            position: absolute;
            top: -50%;
            bottom: -50%;
            left: -50%;
            right: -50%;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            border-style: solid;
            border-width: 0.01rem;
            border-color: #bbb;
            border-radius: 0.26rem;
        }
        span.active-type::before{
            border-color: #FFB000;
        }
    }
    .evaluate-detail{
        flex: 1;
        margin-bottom: 0.5rem;
        ul{
            padding-left: 0.15rem;
            background-color: #fff;
            margin-bottom: 0.4rem;
            li{
                padding: 0.15rem 0.15rem 0.1rem 0;
                overflow: hidden;
                background-color: #fff;
                position: relative;
                .context{
                    line-height: 0.15rem;
                    .userImg{
                        float: left;
                        width: 15%;
                        text-align: left;
                        img{
                            width: 0.4rem;
                            height: 0.4rem;
                            border-radius: 50%;
                        }
                    }
                    .detail{
                        float: left;
                        width: 85%;
                        text-align: left;
                        line-height: 0.15rem;
                        div:nth-child(1){
                            font-size: 16px;
                            color: #2f2f2f;
                            span:nth-child(2){
                                font-size: 12px;
                                color: #898989;
                                float: right;
                            }
                        }
                        div:nth-child(2){
                            line-height: 0.12rem;
                            span{
                                color: #666;
                                font-size: 12px;
                                line-height: 0.12rem;
                            }
                        }
                        div:nth-child(3){
                            font-size: 14px;
                            line-height: 0.2rem;
                            color: #2f2f2f;
                            padding-top: 0.14rem;
                            padding-bottom: 0.08rem;
                        }
                        div:nth-child(4){
                            zoom: 1;
                            overflow: hidden;
                            .goodsImg{
                                width: 0.8rem;
                                height: 0.8rem;
                                background-size: 0.8rem 0.8rem;
                                float: left;
                                margin-right: 0.05rem;
                                margin-bottom: 0.05rem;
                                background-image: url(../../assets/img/tu.png);
                                div{
                                    width: 100%;
                                    height: 100%;
                                    background: url(../../assets/img/pj1.jpg) center no-repeat;
                                }
                            }
                        }
                        div:nth-child(5){
                            margin: 0.04rem 0;
                            font-size: 12px;
                            i{
                                width: 0.11rem;
                                height: 0.11rem;
                                margin-right: 0.1rem;
                                background: url(../../assets/img/xiao.png) no-repeat;
                                background-size: contain;
                                display: inline-block;
                                vertical-align: middle;
                            }
                            span{
                                color: #999;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }
            li::after{
                position: absolute;
                content: '';
                width: 100%;
                left: 0;
                bottom: 0;
                height: 0.01rem;
                background-color: #e4e4e4;
                -webkit-transform: scale(1, 0.5);
                transform: scale(1, 0.5);
                -webkit-transform-origin: center bottom;
                transform-origin: center bottom;
            }
        }
    }
</style>
