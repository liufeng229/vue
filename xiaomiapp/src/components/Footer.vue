<template>
    <footer>
      <ul>
        <li><img src="img/bottom1.jpg">
          <a href="/mainpage">首页</a></li>
        <li><img src="img/bottom2.jpg">
          <a href="/type">分类</a></li>
        <li> <img src="img/bottom3.jpg">
          <a href="/talk">品味</a></li>
        <li><img src="img/bottom4.jpg">
          <a href="/shopcart">购物车</a></li>
        <li><img src="img/bottom5.jpg">
          <a href="/count">我的</a></li>
      </ul>
    </footer>
</template>
<script>
    export default {
      name : 'Footer'
    }

</script>
<style scoped>
  footer{
    width: 100%;
  background-color: #FAFAFA;
  color: #D7D0BD;
  font-size: 0.33rem;
    position: absolute;
    bottom: 0;
  }

  footer ul li{
    width: 20%;
    text-align: center;
    display: inline-block;
  }
  footer img{
    display: block;
    width: 0.63rem;
    height: 0.66rem;
    position: relative;
    left: 0.75rem;
    box-sizing: border-box;
  }
  footer a{
    color: #88603D;
  }
</style>