<template>
    <header>
        <div class="header-part1">
            <img src="img/set.jpg">&nbsp;&nbsp;&nbsp;
            <img src="img/inform.jpg">
        </div>
        <div class="header-part2">
            <div class="left">
                <img src="img/login.jpg">
            </div>
            <div class="center">
                <h2>浅味</h2>
                <p>账号ID:2156258110</p>
                <span class="right">&gt;</span>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "top"
    }
</script>

<style scoped>
    header{
        background-color: #E5B958;
        padding-bottom: 1.5rem;
    }
    .header-part1{
        text-align: right;
        padding-right:0.4rem ;
        box-sizing: border-box;
    }
    .header-part1 img{
        width: 0.67rem;
        height: 0.65rem;
    }
    .left{
        width: 1.76rem;
        height: 1.76rem;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 0.5rem;
        display: inline-block;
    }
    .left img{
        width: 1.76rem;
        height: 1.76rem;
    }
    .center{
        display: inline-block;
        height: 1.76rem;
        font-size: 0.33rem;
        vertical-align: top;
        color: #fff;
    }
    .right{
        font-size: 0.7rem;
        position: relative;
        top:-1.1rem;
        left:7.3rem;
    }
</style>