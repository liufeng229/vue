<template>
  <div>
      <top></top>
      <goods :data='shopcart'></goods>
  <Footer :data='indexInfo'></Footer>
  </div>
</template>
<script>
 import indexApi from "../../api/indexApi"
 import shopcart from "../../api/shopcart"
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
            indexInfo : [],
            shopcart :[]
        }
    },
    methods: {
        _initIndexInfo() {
            indexApi.getData(data => {
                this.indexInfo = data;
                console.log(data)
            })
        },
        _shopcart() {
            shopcart.getData(data => {
                this.shopcart = data;
                console.log(data)
            })
        }
    },
    created() {
        this._initIndexInfo();
        this._shopcart();
    }

}
</script>
<style>

</style>