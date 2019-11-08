<template>
  <div>
      <top></top>
      <mains></mains>
    <Footer :data='indexInfo'></Footer>
  </div>
</template>
<script>
  import indexApi from "../../api/indexApi"
import Footer from '../../components/Footer'
import top from '../../components/count/top'
import mains from '../../components/count/vmain'
export default {
  name : 'count',
  components : {
    Footer,
      top,
      mains
  },
    data (){
        return {
            indexInfo : []
        }
    },
    methods: {
        _initIndexInfo() {
            indexApi.getData(data => {
                this.indexInfo = data;
                console.log(data)
            })
        },
    },
    created() {
        this._initIndexInfo();
    }
  
}
</script>
<style>

</style>