<template>
    <header>
        <h3>有品生活</h3>
        <p>我的关注</p>
        <ul>
            <li>精选</li>
            <li>品牌甄选</li>
            <li>智能家居</li>
            <li>生活日常</li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: "top"
    }
</script>

<style scoped>
    header{
        background-color: #F4B834;
        color: #fff;
        position: relative;
        padding-top: 0.3rem;
    }
    h3{
        font-size: 0.5rem;
        text-align: center;
    }
    header p{
        position: absolute;
        top:0.4rem;
        right:0.3rem;
        font-size: 0.35rem;
    }
    header ul{
        font-size: 0.4rem;
        white-space: nowrap;
        padding: 0.2rem 0;
    }
    header ul li{
        display: inline-block;
        width:2.9rem;
        overflow: hidden;
        text-align: center;
    }
</style>