<template>
    <section class="rightSide">
        <img src="img/wash.jpg" class="wash"><br>
        <div class="kind">
            <span class="top1">为您推荐</span>
            <div class="firstKind">
                <div>
                    <img src="img/kind1.jpg"><br>
                    <span>空调</span>
                </div>
                <div>
                    <img src="img/kind2.jpg"><br>
                    <span>空调</span>
                </div>
                <div>
                    <img src="img/kind3.jpg"><br>
                    <span>空调</span>
                </div>
                <div>
                    <img src="img/kind4.jpg"><br>
                    <span>空调</span>
                </div>
                <div>
                    <img src="img/kind5.jpg"><br>
                    <span>空调</span>
                </div>
                <div>
                    <img src="img/kind6.jpg"><br>
                    <span>空调</span>
                </div>
            </div>
        </div>
        <div class="kind">
            <span class="top2">精选专区</span>
            <div class="twoKind">
                <div>
                    <img src="img/kind7.jpg"><br>
                    <span>空调</span>
                </div>
                <div>
                    <img src="img/kind8.jpg"><br>
                    <span>空调</span>
                </div>
                <div>
                    <img src="img/kind9.jpg"><br>
                    <span>空调</span>
                </div>
                <div>
                    <img src="img/kind10.jpg"><br>
                    <span>空调</span>
                </div>
                <div>
                    <img src="img/kind11.jpg"><br>
                    <span>空调</span>
                </div>
                <div>
                    <img src="img/kind12.jpg"><br>
                    <span>空调</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "rightSide"
    }
</script>

<style scoped>
    .rightSide{
        float:right;
        width: 7.55rem;
        position: relative;
        right:0.25rem;
        top:0.2rem;
    }
    .wash{
        width: 7.56rem;
        height: 2.2rem;
    }
    br{
        width: 0;
        height: 0;
    }
    .firstKind ,.twoKind{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 0.3rem;
        padding-bottom: 0.2rem;
        padding-top:0.43rem;
        box-sizing: border-box;
    }
    .kind{
        background-color: #fff;
    }
    .firstKind div ,.twoKind div{
        width: 30%;
        text-align: center;
    }
    .firstKind img ,.twoKind img{
        width: 2.07rem;
        height: 2.07rem;
    }
    main::after{
        content: "";
        height: 0;
        display: block;
        clear: both;
        overflow: hidden;
        visibility: hidden;
    }
    .top1,.top2{
        padding-left: 0.2rem;
        font-size: 0.33rem;
        font-weight: 600;
    }

</style>