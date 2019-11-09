<template>
  <div>
      <top></top>
      <mains :data='count' v-if="count"></mains>
    <Footer :data='indexInfo' v-if="indexInfo"></Footer>
  </div>
</template>
<script>
  import indexApi from "../../api/indexApi"
  import count from "../../api/count"
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
            indexInfo : [],
            count :[]
        }
    },
    methods: {
        _initIndexInfo() {
            indexApi.getData(data => {
                this.indexInfo = data;
                console.log(data)
            })
        },
        _count() {
            count.getData(data => {
                this.count = data;
                console.log(data)
            })
        }
    },
    created() {
        this._initIndexInfo();
        this._count();
    }
  
}
</script>
<style>

</style>