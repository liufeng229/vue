<template>
    <main>
        <section class="mainPart">
            <div class="mainPart-top">我的订单</div>
            <div class="mainPart-bottom">
                <div>
                    <img src="img/order1.jpg">
                    <p>待付款</p>
                </div>
                <div>
                    <img src="img/order2.jpg">
                    <p>待收货</p>
                </div>
                <div>
                    <img src="img/order3.jpg">
                    <p>待评价</p>
                </div>
                <div>
                    <img src="img/order4.jpg">
                    <p>退货/售后</p>
                </div>
            </div>
        </section>
        <section class="same">
            <div class="mainPart-top">我的订单</div>
            <div class="mainPart-bottom">
                <div>
                    <img src="img/func1.jpg">
                    <p>0张优惠券</p>
                </div>
                <div>
                    <img src="img/func2.jpg">
                    <p>我的收藏</p>
                </div>
                <div>
                    <img src="img/func3.jpg">
                    <p>浏览记录</p>
                </div>
                <div>
                    <img src="img/func4.jpg">
                    <p>地址管理</p>
                </div>
            </div>
        </section>
        <img src="img/help.jpg" class="pic">
        <section class="same1">
            <div class="mainPart-top">更多工具</div>
            <div class="mainPart-bottom">
                <div>
                    <img src="img/tool1.jpg">
                    <p>我的资产</p>
                </div>
                <div>
                    <img src="img/tool2.jpg">
                    <p>小米钱包</p>
                </div>
                <div>
                    <img src="img/tool3.jpg">
                    <p>拼团</p>
                </div>
                <div>
                    <img src="img/tool4.jpg">
                    <p>我要定制</p>
                </div>
                <div>
                    <img src="img/tool5.jpg">
                    <p>官方客服</p>
                </div>
                <div>
                    <img src="img/tool6.jpg">
                    <p>用户反馈</p>
                </div>
                <div>
                    <img src="img/tool7.jpg">
                    <p>自制执照</p>
                </div>
                <div>
                    <img src="img/tool8.jpg">
                    <p>协议规则</p>
                </div>
                <div>
                    <img src="img/tool9.jpg">
                    <p>线下门店</p>
                </div>
                <div>
                    <img src="img/tool10.jpg">
                    <p>玩家俱乐部</p>
                </div>
                <div>
                    <img src="img/tool11.jpg">
                    <p>小米零钱卡</p>
                </div>
                <div></div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: "mains"
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