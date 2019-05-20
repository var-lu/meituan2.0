<template>
    <div>
        <div class="wrapper">
            <div ref="left">
                <ul>
                    <li :class="{active:activeIndex === index}" v-for="(item,index) in left" >
                        <span class="left-item">{{item}}</span>
                    </li>
                </ul>
            </div>
            <div ref="right">
                <ul>
                    <li v-for="(item) in right">
                        <h3>{{item.name}}</h3>
                        <ul>
                            <li v-for="num in item.content">
                                <div>{{item.name + num}}</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "order",
    data(){
        return{
            activeIndex : 0,
            left:["热销","折扣"],
            right:[
                {
                    name : "乾隆白菜",
                    content:['1','2','3','4','5','6']
                },
                {
                    name : "老虎菜",
                    content:['1','2','3','4','5','6']
                },
                {
                    name : "皮蛋豆腐",
                    content:['1','2','3','4','5','6']
                },
                {
                    name : "夫妻肺片",
                    content:['1','2','3','4','5','6']
                },
                {
                    name : "姜汁松花蛋",
                    content:['1','2','3','4','5','6']
                },
                {
                    name : "凉拌木耳",
                    content:['1','2','3','4','5','6']
                },
                {
                    name : "地三鲜盖饭",
                    content:['1','2','3','4','5','6']
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .order-wrap{
        flex: 1 1 auto;
        display: flex;
        position: relative;
        width: 100%;
        overflow-x: hidden;
        .order{
            flex: 0 0 auto;
            width: 100%;
            nav{
                    min-height: 100%;
                    width: 80px;
                    -webkit-flex: 0 1 auto;
                    -ms-flex: 0 1 auto;
                    flex: 0 1 auto;
                    display: flex;
                    flex-direction: column;
                    z-index: 1;
                    position: relative;
                    overflow: scroll;
                    background-color: #fff;
                    margin-left: -0.15ren;
                    background: #f5f5f5;
                    a{
                        display: block;
                        overflow: hidden;
                        padding: 0.1rem;
                        width:100%;
                        box-sizing: border-box;
                        min-height: 0.49rem;
                        color: #666666;
                        font-size: 0.14rem;
                        text-align: ce;
                        padding-top: 0.09rem;
                        padding-bottom: 0.22rem;
                    }
                    a.active{
                        background: #fff;
                        font-weight: bold;
                        color: #666;
                    }
            }
        }
    }
</style>
