<template>
  <div>
      <index-top></index-top>
      <main-part-two  :data='indexInfo'></main-part-two>
      <main-part-three  :data='indexInfo'></main-part-three>
      <Footer :data='indexInfo'></Footer>
  </div>
</template>
<script>
    import indexApi from "../../api/indexApi"
import Footer from '../../components/Footer'
import indexTop from '../../components/common/index-top'
import mainPartTwo  from '../../components/common/index-main-part-one'
import mainPartThree  from '../../components/common/main-part-three'
export default {
  name : 'index',
  components : {
      Footer,
      indexTop,
      mainPartTwo,
      mainPartThree
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