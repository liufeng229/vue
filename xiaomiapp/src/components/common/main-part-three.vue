<template>
    <section class="main2">
        <div class="main2One">
            <h4>秋冬换季专场</h4>
            <p>最高直降150</p>
            <a href="#">立即查看</a>
            <img src="img/shopping1.jpg">
        </div>
        <div class="main2Two">
            <h4>智米品牌馆</h4>
            <p>最高立省1500</p>
            <a href="#">立即查看</a>
            <img src="img/shopping2.jpg">
        </div>
        <div class="main2Three">
            <h4>映趣品牌馆</h4>
            <p>最低25元起</p>
            <a href="#">立即查看</a>
            <img src="img/shopping3.jpg">
        </div>
        <div class="main2Four">
            <h4>七面2周年</h4>
            <p>爆品限时1元购</p>
            <a href="#">立即查看</a>
            <img src="img/shopping4.jpg">
        </div>
    </section>
</template>

<script>
    export default {
        name: "main-part-three"
    }
</script>

<style scoped>
    .main2{
        display: flex;
        flex-wrap: wrap;
        border-radius: 0.7rem;
        background-color:#F4F3F1;
        padding-left:0.5rem;
        justify-content: space-between;
    }
    .main2 h4{
        font-size: 0.45rem;
    }
    .main2 div{
        width: 49%;
        position: relative;
        margin-bottom: 0.2rem;
        height: 2.7rem;
        padding: 0.3rem;
        box-sizing: border-box;
    }
    .main2>div>img{
        width: 2.18rem;
        height: 1.98rem;
        position: absolute;
        right: 0;
        top: 0.5rem;
    }
    .main2>div>p{
        font-size: 0.35rem;
        height: 0.8rem;
        line-height: 0.8rem;
    }
    .main2>div>a{
        margin-top: 0.1rem;
        display:block;
        width:1.75rem;
        height:0.5rem;
        font-size: 0.35rem;
        text-align: center;
        line-height: 0.5rem;
        border-radius: 0.25rem;
        color: #fff;
    }
    .main2One ,.main2Four{
        background-color: #FCDEE0;
        color: #E25D5E;
    }
    .main2One a,.main2Four a{

        background-color: #E05D62;
    }
    .main2Two{
        background-color: #CCDDEF;
        color:#5D70AA;
    }
    .main2Two>a{
        background-color:#91A2D0 ;
    }
    .main2Three{
        background-color: #F5EBD0;
        color: #C1A96B;
    }
    .main2Three>a{
        background-color:#BB8F2E ;
    }
</style>