<template>
    <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
  </div>

</template>

<script>
  import Header from './components/Header.vue';

  export default {
    components:{
    "app-header":Header
    }
  }
</script>
