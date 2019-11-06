<template>
    <section class="main1">
        <div>
            <img src="img/type1.jpg">
            <p>每日上新</p>
        </div>
        <div>
            <img src="img/type2.jpg">
            <p>小米众筹</p>
        </div>
        <div>
            <img src="img/type3.jpg">
            <p>限时抢购</p>
        </div>
        <div>
            <img src="img/type4.jpg">
            <p>热销排行</p>
        </div>
        <div>
            <img src="img/type5.jpg">
            <p>一元拼团</p>
        </div>
        <div>
            <img src="img/type6.jpg">
            <p>小米自营</p>
        </div>
        <div>
            <img src="img/type7.jpg">
            <p>户外运动</p>
        </div>
        <div>
            <img src="img/type8.jpg">
            <p>家用电器</p>
        </div>
        <div>
            <img src="img/type9.jpg">
            <p>有品海购</p>
        </div>
        <div>
            <img src="img/type10.jpg">
            <p>服饰配饰</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "main-part-two"
    }
</script>

<style scoped>
    .main1{
        display: flex;
        flex-wrap: wrap;
        border-radius: 0.7rem;
        background-color:#F4F3F1;
        padding-left:0.5rem;
        padding-top: 1.8rem;
        position: relative;
        top: -0.5rem;
        left:0;
        z-index: 2;
    }
    .main1 div{
        width: 20%;
    }
    .main1 div img{
        width: 1.46rem;
        height: 1.46rem;
    }
    .main1 div p{
        padding-bottom:0.2rem;
        font-size: 0.37rem;
        box-sizing: border-box;
        font-weight: 600;
    }
</style>