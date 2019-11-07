<template>
  <div>
      <top></top>
      <goods></goods>
   <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer'
import top from '../../components/shopcart/top'
import goods from '../../components/shopcart/goods'
export default {
  name : 'shopcart',
  components : {
    Footer,
      top,
      goods
  }

}
</script>
<style>

</style>