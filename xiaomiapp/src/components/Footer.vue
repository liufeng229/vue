<template>
    <footer>
      <ul>
        <li :key="index" v-for="(f,index) in data.footer">
          <img :src="f.pic">
          <a :href="f.address">{{f.title}}</a>
        </li>
      </ul>
    </footer>
</template>
<script>
console.log()
    export default {
      name : 'Footer',
      props: ['data']  
    }
 
</script>
<style scoped>
  footer{
    width: 100%;
  background-color: #FAFAFA;
  color: #D7D0BD;
  font-size: 0.33rem;
    position: fixed;
    bottom: 0;
      left: 0;
    z-index: 4;
  }

  footer ul li{
    width: 20%;
    text-align: center;
    display: inline-block;
  }
  footer img{
    display: block;
    width: 0.63rem;
    height: 0.66rem;
    position: relative;
    left: 0.75rem;
    box-sizing: border-box;
  }
  footer a{
    color: #88603D;
  }
</style>