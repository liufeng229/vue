<template>
  <div>
    <top></top>
    <leftSide></leftSide>
    <rightSide></rightSide>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer'
import leftSide from '../../components/type/leftSide'
import rightSide from '../../components/type/rightSide'
import  top from '../../components/type/top'
export default {
  name : 'type',
  components : {
    Footer,
    leftSide,
    rightSide,
    top
  }
}
</script>
<style>

</style>