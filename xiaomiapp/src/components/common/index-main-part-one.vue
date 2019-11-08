<template>
    <div  class="main1">
        <div :key="index" v-for="(f,index) in data.type">
            <img :src="f.pic">
            <p>{{f.title}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index-main-part-one",
        props: ['data'],
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