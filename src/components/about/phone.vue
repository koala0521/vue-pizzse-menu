<template>
  <div>
    <h5>联系电话：010-666666</h5>
    <p> {{ path }} </p>
  </div>

</template>
<script>
  export default {
    data(){
      return {
        // 当前路由的所有嵌套路径
        matchs:this.$route.matched
      }
    },
    computed:{
      path(){
        console.log( `path${ this.$route.path }` );  
        return this.$route.path;
      }
    },
    mounted(){
      console.log( this.$route.matched );
      
    }
  }
  
  
</script>
