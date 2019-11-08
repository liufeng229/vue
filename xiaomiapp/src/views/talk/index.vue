<template>
  <div>
    <top></top>
    <vmain></vmain>
    <Footer :data='indexInfo'></Footer>
  </div>
</template>
<script>
 import indexApi from "../../api/indexApi"
import Footer from '../../components/Footer'
import top from '../../components/talk/top'
import vmain from '../../components/talk/main'
export default {
  name : 'talk',
  components : {
    Footer,
    top,
    vmain
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