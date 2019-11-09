<template>
    <main>
        <section class="mainPart">
            <div class="mainPart-top">{{data.partone.title}}</div>
            <div class="mainPart-bottom">
                <div :key="index" v-for="(f,index) in data.partone.bottom">
                    <img :src="f.pic">
                    <p>{{f.title}}</p>
                </div>
            </div>
        </section>
        <section class="same">
            <div class="mainPart-top">{{data.parttwo.title}}</div>
            <div class="mainPart-bottom">
                <div :key="index" v-for="(f,index) in data.parttwo.bottom">
                    <img :src="f.pic">
                    <p>{{f.title}}</p>
                </div>
            </div>
        </section>
        <img :src="data.pic" class="pic">
        <section class="same1">
            <div class="mainPart-top">{{data.partthree.title}}</div>
            <div class="mainPart-bottom">
                <div :key="index" v-for="(f,index) in data.partthree.bottom">
                    <img :src="f.pic" v-if="f.pic">
                    <p>{{f.title}}</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: "reused",
        props:['data']
    }
</script>

<style scoped>
    .mainPart{
        background-color: #fff;
        margin:-1.2rem 0.3rem ;
        padding-top: 0.2rem;
        position: relative;
        z-index: 3;
        border-radius: 0.2rem;
    }
    .mainPart img{
        width: 0.96rem;
        height: 1.06rem;
    }
    .same{
        background-color: #fff;
        margin:1.5rem 0.3rem 0.2rem;
        padding-top: 0.2rem;
        border-radius: 0.2rem;
    }
    .same img{
        width: 0.72rem;
        height: 0.73rem;
    }
    .same1{
        background-color: #fff;
        margin:0 0.3rem 0.2rem;
        padding-top: 0.2rem;
        border-radius: 0.2rem;
    }
    .same1 img{
        width: 0.87rem;
        height: 0.82rem;
    }
    .mainPart-top{
        font-size: 0.4rem;
        padding-left: 0.4rem;
        height: 0.5rem;
    }
    .mainPart-bottom{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size:0.3rem;
        margin-top: 0.2rem;

        box-sizing: border-box;
        border:0.02rem solid #eee;
    }
    .mainPart-bottom div{
        padding: 0.4rem 0;
    }
    .mainPart-bottom div{
        width: 24%;
        text-align: center;
    }
    .pic{
        width: 10.19rem;
        height: 2.11rem;
        margin-left: 0.4rem;
    }
</style>