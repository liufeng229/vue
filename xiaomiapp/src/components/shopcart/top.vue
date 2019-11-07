<template>
    <header>
        <h1>购物车</h1>
        <span class="back">&lt;</span>
        <span class="edite">编辑</span>
    </header>
</template>

<script>
    export default {
        name: "top"
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 4.1rem;
        background-color: #E9C46C;
        color: #fff;
        position: relative;
        font-size: 0.45rem;
        padding-top: 0.4rem;

    }
    header h1{
        text-align: center;
        font-size: 0.75rem;
    }
    .back{
        position: absolute;
        top:0.4rem;
        left:0.3rem;
    }
    .edite{
        position: absolute;
        top:0.4rem;
        right:0.3rem;
    }
</style>