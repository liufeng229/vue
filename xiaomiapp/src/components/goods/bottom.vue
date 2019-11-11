<template>
    <div class="footer">
        <div>
            <div class="samebtom">
                <img src="../../../public/img/s-help.jpg"><br>
                客服
            </div>
            <div class="samebtom">
                <img src="../../../public/img/s-save.jpg"><br>
                收藏
            </div>
            <div class="samebtom">
                <img src="../../../public/img/s-car.jpg"><br>
                购物车
            </div>
        </div>
        <div class="bottom">
            <div class="box1">加入购物车</div>
            <div class="box2">立即购买</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
    h4{
        font-size: 0.5rem;
        padding-left: 0.2rem;
    }
    p{
        font-size: 0.4rem;
        padding-left: 0.2rem;
    }
    .footer{
        width: 100%;
        height: 1.6rem;
        background-color: #fff;
        position: relative;
    }
    .footer div{
        display: inline-block;
        font-size: 0.33rem;
    }
    .samebtom{
        padding-top: 0.1rem;
        width: 1.1rem;
        text-align: center;
    }
    .footer img{
        width: 0.75rem;
        height: 0.76rem;
    }
    .bottom{
        position: absolute;
        top:0.25rem;
        right:0.55rem;
        width: 6rem;
        height: 1.1rem;
        border-radius: 0.5rem;
        overflow: hidden;
    }
    .box1,.box2{
        width: 2.95rem;
        height: 1.1rem;
        color: white;
        font-size: 0.45rem;
        text-align: center;
        line-height: 1.1rem;
    }
    .box1{
        background-color: #D5B079;
    }
    .box2{
        background-color: #C21517;
        position: relative;
        top: 0;
        right: 0.1rem;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }
</style>