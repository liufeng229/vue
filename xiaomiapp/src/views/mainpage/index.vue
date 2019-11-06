<template>
  <div>
      <indexTop></indexTop>
      <mainPartTwo></mainPartTwo>
      <mainPartThree></mainPartThree>
   <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer'
import indexTop from '../../components/common/index-top'
import mainPartTwo  from '../../components/common/main-part-two'
import mainPartThree  from '../../components/common/main-part-three'
export default {
  name : 'mainpage',
  components : {
      Footer,
      indexTop,
      mainPartTwo,
      mainPartThree
  }
}
</script>
<style>

</style>