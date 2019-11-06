<template>
    <div class="box">
        <div class="top">
            <img src="img/only.jpg">
            <input type="text">
        </div>
    </div>
</template>

<script>
    export default {
        name: "top"
    }
</script>

<style scoped>
    .box{
        background-color: #fff;
        padding: 0.2rem 0;
    }
    .top{
        width: 9.9rem;
        height: 1rem;
        background-color: #F3F3F3;
        margin: 0 auto;
        box-sizing: border-box;
        border-radius: 0.45rem;
    }
    .top img{
        width: 0.51rem;
        height: 0.53rem;
        position: relative;
        top: -0.3rem;
        left: 0.4rem;
    }
    .top input{
        background:none;
        outline:none;
        border:0px;
    }
    .top input:focus{
        border: none;
        background: #F5F5F5;
        outline: none;
    }
</style>