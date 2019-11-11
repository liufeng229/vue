<template>
   <div>
       <top></top>
       <bottom></bottom>
   </div>
</template>

<script>
    import bottom  from '../../components/goods/bottom'
    import top  from '../../components/goods/top'
    export default {
        name: "index",
        components : {
            bottom,top
        }
    }
</script>

<style scoped>

</style>