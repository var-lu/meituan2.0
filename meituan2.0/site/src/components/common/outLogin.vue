<template>
    <div class="out_login">
        <div class="out_login_mark"></div>
        <div class="out_login_content">
            <p>确定要退出登录吗？</p>
            <div>
                <p class="left">确定</p>
                <p class="right" @click="$emit('update:isShow',false)">取消</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["isShow"]
}
</script>
<style lang="scss" scoped>
    .out_login{
        width: 100%;
        height: 100vh;
        font-size:17px;
        color: #333;
        .out_login_mark{
            width: 100%;
            height: 100%;
            position: fixed;
            background: #000;
            opacity: 0.3;
            left: 0;
            top: 0;
            z-index: 10000;
        }
        .out_login_content{
            position: fixed;
            top: 50%;
            left: 50%;
            width: 3rem;
            background: #fff;
            opacity: 1;
            overflow: hidden;
            transform: translate(-50%,-50%);
            text-align: center;
            border-radius: 8px;
            z-index: 10001;
            >p{
                padding: 0.25rem;
                border-bottom: 1px solid #e6e6e6;
            }
            >div{
                margin-left: -1px;
                p{
                    width: 49%;
                    height: .44rem;
                    line-height: .44rem;
                    border-left: 1px solid #e6e6e6;
                }
                p+p{  color: #ffaf00;}
            }
        }
    }
</style>
