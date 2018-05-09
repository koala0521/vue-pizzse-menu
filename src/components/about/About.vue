<template>
  <div>
    <h1>About</h1>
    <div class="container">
      <router-link to="/about/phone">联系方式</router-link>
      <router-link to="/about/place">联系地址</router-link>
      <router-view></router-view>
    </div>
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
  };
  
</script>

