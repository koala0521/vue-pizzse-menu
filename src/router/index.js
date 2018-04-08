import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Menu from '@/components/Menu'
import Register from '@/components/Register'
import About from '@/components/about/About';

// 嵌套路由
import Phone from '@/components/about/phone';
import Place from '@/components/about/place';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children:[
        {
          path:'phone',
          component: Phone,
        },
        {
          path:'place',
          component: Place,
        },
        {
          path:'*',
          redirect: 'phone',
        }         
      ]
    },    
    {
      path: '*',
      redirect:"/"
    }
  ],
  mode:"history"
});

// 全局守卫 路由跳转之前触发，需要手动执行 next() 否则路由不会跳转
router.beforeEach( ( to ,from ,next )=>{
  console.log("没有登陆");
  next();
});

// 后置钩子 router.afterEach(( to , from )=>{ }) ,路由跳转后触发，不常用

export default router;