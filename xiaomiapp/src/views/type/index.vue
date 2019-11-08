<template>
  <div>
    <top></top>
    <leftSide></leftSide>
    <rightSide></rightSide>
   <Footer :data='indexInfo'></Footer>
  </div>
</template>
<script>
 import indexApi from "../../api/indexApi"
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