<template>
        <div class="goods">
            <ul>
                <li @click="show">
                    <div class="sty">
                        <div class="goodstype">
                            <input type="checkbox" class="btn btn2">&nbsp;
                            <span>有品精选</span>
                            <span class="goodstype-fee">运费已免</span>
                        </div>
                        <div>
                            <input type="checkbox" class="btn btn1">&nbsp;
                            <img src="../../../public/img/watch.jpg" class="pic">
                            <div class="rightSide">
                                <p>AMAZFIT 米动手表青春版</p>
                                <p>Lite&nbsp;耀石黑&nbsp;标配</p>
                                <p>￥ <span class="price">299</span></p>
                                <div class="num">
                                    <span>-</span>&nbsp;&nbsp;
                                    <span class="number">1</span>&nbsp;&nbsp;
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li @click="show">
                    <div class="sty">
                        <div class="goodstype">
                            <input type="checkbox" class="btn btn2">&nbsp;
                            <span>有品精选</span>
                            <span class="goodstype-fee">运费已免</span>
                        </div>
                        <div>
                            <input type="checkbox" class="btn btn1">&nbsp;
                            <img src="../../../public/img/watch.jpg" class="pic">
                            <div class="rightSide">
                                <p>AMAZFIT 米动手表青春版</p>
                                <p>Lite&nbsp;耀石黑&nbsp;标配</p>
                                <p>￥ <span class="price">299</span></p>
                                <div class="num">
                                    <span>-</span>&nbsp;&nbsp;
                                    <span class="number">1</span>&nbsp;&nbsp;
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li @click="show">
                    <div class="sty">
                        <div class="goodstype">
                            <input type="checkbox" class="btn btn2">&nbsp;
                            <span>有品精选</span>
                            <span class="goodstype-fee">运费已免</span>
                        </div>
                        <div>
                            <input type="checkbox" class="btn btn1">&nbsp;
                            <img src="../../../public/img/watch.jpg" class="pic">
                            <div class="rightSide">
                                <p>AMAZFIT 米动手表青春版</p>
                                <p>Lite&nbsp;耀石黑&nbsp;标配</p>
                                <p>￥ <span class="price">299</span></p>
                                <div class="num">
                                    <span>-</span>&nbsp;&nbsp;
                                    <span class="number">1</span>&nbsp;&nbsp;
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li @click="show">
                    <div class="sty">
                        <div class="goodstype">
                            <input type="checkbox" class="btn btn2">&nbsp;
                            <span>有品精选</span>
                            <span class="goodstype-fee">运费已免</span>
                        </div>
                        <div>
                            <input type="checkbox" class="btn btn1">&nbsp;
                            <img src="../../../public/img/watch.jpg" class="pic">
                            <div class="rightSide">
                                <p>AMAZFIT 米动手表青春版</p>
                                <p>Lite&nbsp;耀石黑&nbsp;标配</p>
                                <p>￥ <span class="price">299</span></p>
                                <div class="num">
                                    <span>-</span>&nbsp;&nbsp;
                                    <span class="number">1</span>&nbsp;&nbsp;
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
    export default {
        name: "goods",
        methods:{
            show(){
                location.href="./goods"
            }
        }
    }
</script>

<style scoped>
    .goods{

        width: 10.1rem;
        margin: 0 auto;
        font-size: 0.4rem;
        position: relative;
        top: -2rem;
        z-index: 2;

    }
    .goods ul li{
        height: 4.8rem;
        border: 1px solid #fff;
        background-color: #fff;
        overflow: hidden;
        border-radius: 0.45rem;
        margin-bottom: 0.2rem;
    }
    .goodstype{
        height: 1.5rem;
        line-height: 1.5rem;
    }
    .sty{
        padding-left:0.2rem ;
        position: relative;

    }
    .pic{
        width: 2.6rem;
        height: 2.59rem;
    }
    .goodstype-fee{
        position: absolute;caption-side: ;
        right: 0.3rem;
        top: 0;
    }
    .rightSide{
        position: absolute;
        right:1.1rem;
        top:1.55rem;
    }
    .rightSide p{
        padding: 0.1rem;
    }
    .num{
        position: absolute;
        right:0;
        top:1.5rem;
    }
    .price{
        color: red;
    }
    .btn{
        width: 0.5rem;
        height: 0.5rem;
    }
    .btn1{
        position: relative;
        top: -1rem;
    }
    .btn2{
        position: relative;
        top: 0.1rem;
    }
    .number{
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        line-height:0.5rem;
        text-align: center;
        background-color: #eee;
    }
</style>