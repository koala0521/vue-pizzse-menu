# vue 学习

### 项目搭建：

 - vue-cli 

    安装cli：
        npm: npm i -g vue-cli (要求：电脑安装node)
        yarn: yarn install global vue-cli (要求：电脑安装node并且安装yarn)
        快速创建项目：
            vue init webpack demo1 ("项目名称")
            过程中需要输入一些项目相关信息，根据需求输入yes或者no即可

## 启动项目：
    命令行输入：
        cd demo1
        npm run dev 或者 npm start

## vue-router 路由

    使用路由，需要先注册路由:
        Vue.use(Router);
    
    创建路由配置并导出：
        const router = new Router({
            routes:[
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
                }
            ],
            <!-- 路由类型： 默认为 hash  -->
            mode:"history"
        });

    export default router;

    vue实例引用配置好的路由：

        import router from './router'

        new Vue({
            el: '#app',            
            router,
            components: { App },
            render:h=> h(App)
        })

    路由展示：
        使用vue全局的 router-view 组件，展示路由的效果

        <div>
            <router-view></router-view>
        </div>

    路由跳转：
        使用vue全局的 router-link 组件

        <div class="van" >
            <router-link to="/" >主页</router-link>
            <router-link to="/login" >登录页</router-link>
            <router-link to="/about" >关于页</router-link>
        </div>
