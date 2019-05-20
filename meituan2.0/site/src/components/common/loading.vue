<template>
    <div class="mybox">
        <div>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .mybox{
        width: 100%;
        height: 100vh;
        position: relative;
        >div{
            position: absolute;
            top:50%;
            left: 50%;
            width: 0.6rem;
            height: 0.6rem;
            background: #999;
            transform: translate(-50%,-50%);
            border-radius: 0.1rem;
            opacity: 0.7;
            span{
                display: block;
                width: 0.6rem;
                height: 0.6rem;
                line-height: 80px; 
                // 旋转
                @keyframes rotating{
                    from{transform:rotate(0)}
                    to{transform:rotate(360deg)}
                }
                animation:rotating 1.2s linear infinite;
                background: url(../../assets/img/component-lazyload.gif) no-repeat center;
                background-size: 50% 50%;
            }
        }
    }
</style>
