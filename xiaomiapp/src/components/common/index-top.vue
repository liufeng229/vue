<template>
    <div>
        <section class="top">
            <span class="top-first">有品</span>&nbsp;
            <div class="top-two">
                <img src="img/top1.jpg">
                <input type="text">
                <img src="img/top2.jpg">
            </div>
            &nbsp;&nbsp;<img src="img/top3.jpg" class="top-three">
        </section>
        <img src="img/main.jpg" class="main-img">
    </div>
</template>

<script>
    export default {
        name: "index-top"
    }
</script>

<style scoped>
    .top{
        width: 100%;
        height: 5.65rem;
        background-color: #BA888B;
        padding: 0.4rem 0.35rem 0;
        box-sizing: border-box;
    }
    .top-first{
        position: relative;
        top: -0.25rem;
        left: 0;
    }
    .top-two{
        background-color:#F2E8E7;
        padding:0 0.2rem ;
        border-radius: 0.48rem;
    }
    .top img{
        width: 0.41rem;
        height: 0.63rem;
    }
    .top input{
        width: 5.2rem;
        height: 1rem;
        line-height: 0.9rem;
        background:none;
        outline:none;
        border:0;
        position: relative;
        top: -0.25rem;
        left: 0;
    }
    .top-three{
        position: relative;
        top: -0.25rem;
        left: 0;
    }
    .top span{
        font-size: 0.75rem;
    }
    .top-two img{
        position: relative;
        top: -0.25rem;
        left: 0;
    }
    .top div{
        height: 1rem;
        display: inline-block;
    }
    .main-img{
        position: absolute;
        top: 2rem;
        left: 0.35rem;
        width: 10.09rem;
        height: 4.21rem;
        z-index: 3;
    }
</style>