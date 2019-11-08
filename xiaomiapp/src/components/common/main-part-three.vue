<template>
    <section class="main2">
        <div class="main2One" :key="index" v-for="(f,index) in data.main2Data">
            <h4>{{f.mainTitle}}</h4>
            <p>{{f.title}}</p>
            <a href="#">{{f.moreInfo}}</a>
            <img :src="f.pic">
        </div>
    </section>
</template>

<script>
    export default {
        name: "main-part-three",
        props: ['data'],
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
    .main2 div:nth-child(1) ,.main2 div:nth-child(4){
        background-color: #FCDEE0;
        color: #E25D5E;
    }
    .main2 div:nth-child(2){
        background-color: #CCDDEF;
        color:#5D70AA;
    }
    .main2 div:nth-child(2)>a{
        background-color:#91A2D0 ;
    }
   .main2 div:nth-child(3){
        background-color: #F5EBD0;
        color: #C1A96B;
    }
    .main2 div:nth-child(3)>a{
        background-color:#BB8F2E ;
    }
</style>