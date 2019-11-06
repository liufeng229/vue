<template>
  <div>
    <top></top>
    <vmain></vmain>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer'
import top from '../../components/talk/top'
import vmain from '../../components/talk/main'
export default {
  name : 'talk',
  components : {
    Footer,
    top,
    vmain
  }
  
}
</script>
<style>

</style>