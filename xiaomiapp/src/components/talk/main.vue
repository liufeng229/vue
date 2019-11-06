<template>
    <main>
        <div>
            <div class="top">
                <img src="img/file.jpg">
                <span class="name">-乌咪-</span>
                <span class="username">+&nbsp;关注</span>
                <p class="order">欧美特真无线&nbsp;双麦降噪&nbsp;反向充电超长续航</p>
            </div>
            <div>
                <img src="img/artical.jpg" class="pic">
            </div>
            <p class="num">340&nbsp;阅读</p>
        </div>
        <div class="bottom">
            <div class="top">
                <img src="img/file1.jpg">
                <span class="name">火火</span>
                <span class="username">+&nbsp;关注</span>
                <p class="order">中秋的气氛越来越浓,手痒痒就做了一些糕点。</p>
            </div>
            <div class="type">
                <img src="img/artical-pic1.jpg">
                <img src="img/artical-pic2.jpg">
                <img src="img/artical-pic3.jpg">
            </div>
            <p class="num">4115&nbsp;阅读</p>
        </div>
    </main>
</template>

<script>
    export default {
        name: "vmain"
    }
</script>

<style scoped>
    main{
        padding:0.3rem;
        font-size: 0.35rem;
        background-color: #fff;
    }
    .bottom{
        margin-top: 0.25rem;
    }
    .top img{
        vertical-align: middle;
        width: 1.02rem;
        height: 1.04rem;
    }
    .username{
        display: inline-block;
        width: 1.8rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        background-color: #F7A843;
        position: relative;
        top: 0;
        left:6.1rem;
        border-radius: 0.5rem;
        color: #fff;
    }
    .order{
        height: 1rem;
        line-height: 1rem;
    }
    .pic{
        width: 100%;
    }
    .num{
        text-align: right;
        height: 1rem;
        line-height: 1rem;
    }
    .type{
        display: flex;
        justify-content: space-around;
    }
    .type img{
        width: 32%;
    }
</style>