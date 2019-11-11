<template>
   <div>
       <div class="partone">
           <img src="../../../public/img/person.jpg" >
       </div>
       <p class="price">￥899<span>起</span>
           <a href="#"><img src="../../../public/img/share1.jpg"></a>
       </p>
       <h4>LUCKYMELIFE和田玉福润平安吊坠 </h4>
       <p class="explain">和田白玉，时尚配绳，寓意平安，礼遇佳品</p>
       <p class="show">预售，预计10月19日陆续发货</p>
       <p class="promise">
           <img src="../../../public/img/logo.jpg">小米有品&nbsp;|&nbsp;有品质，放心买
       </p>
       <p class="sameStyle">
           <span class="color">已选</span>&nbsp;&nbsp;<span>请选择规格</span><span>&gt;</span>
       </p>
       <p class="sameStyle">
           <span class="color">送至</span>&nbsp;&nbsp;<span>西安市&nbsp;雁塔区</span><span>&gt;</span>
       </p>
       <p class="sameStyle">
           <span class="color">服务</span>&nbsp;&nbsp;满99元包邮&nbsp;有品三方&nbsp;七天无理由&nbsp;<span>&gt;</span>
       </p>
   </div>
</template>

<script>
    export default {
        name: "top"
    }
</script>

<style scoped>
    p{
        font-size: 0.4rem;
        padding-left: 0.2rem;
    }
    .partone{
        width: 100%;
        height: 10.8rem;
    }
    .partone img{
        width: 100%;
        height: 100%;
    }
    .price{
        color:#A90100;
        font-size: 0.7rem;
        padding-left: 0.2rem;
    }
    .price span{
        font-size: 0.4rem;
    }
    .price img{
        height: 0.95rem;
        width: 0.95rem;
        position: relative;
        left: 6.9rem;
        top:0.2rem;
    }
    h4{
        font-size: 0.5rem;
        padding-left: 0.2rem;
    }
    .explain{
        font-size: 0.4rem;
        padding-left: 0.2rem;
        font-weight: 600;
        margin-top: 0.2rem;
    }
    .show{
        color:#A90100;
        font-size: 0.4rem;
        padding-left: 0.2rem;
        font-weight: 600;
    }
    .promise{
        color:#B7A081;
        font-size: 0.4rem;
        padding-left: 0.2rem;
        margin-top: 0.2rem;
    }
    .promise img{
        width: 0.43rem;
        height: 0.43rem;
        position: relative;
        top:0.1rem;
    }
    .color{
        color:#989898;
    }
    .sameStyle{
        border-bottom:0.03rem solid #E4E4E4;
        height: 0.8rem;
        line-height: 0.8rem;
    }
</style>