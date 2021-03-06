// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

import axios from 'axios';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './common/css/global.css';

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://wd2468178309upkmpi.wilddogio.com/'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  // template: '<App/>'
  render:h=> h(App)
})

/*

渲染组件时，template和 render都可以实现组件的渲染。 

render函数的优先级，高于 template，

vue2.0+中，template最终也会传入render函数中执行。

*/ 
