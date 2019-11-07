<template>
  <div>
      <top></top>
      <mains></mains>
   <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer'
import top from '../../components/count/top'
import mains from '../../components/count/vmain'
export default {
  name : 'count',
  components : {
    Footer,
      top,
      mains
  }
  
}
</script>
<style>

</style>