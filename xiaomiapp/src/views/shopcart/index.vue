<template>
  <div>
      <top></top>
      <goods></goods>
  <Footer :data='indexInfo'></Footer>
  </div>
</template>
<script>
 import indexApi from "../../api/indexApi"
import Footer from '../../components/Footer'
import top from '../../components/shopcart/top'
import goods from '../../components/shopcart/goods'
export default {
  name : 'shopcart',
  components : {
    Footer,
      top,
      goods
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