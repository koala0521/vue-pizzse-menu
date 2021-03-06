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
                    path: '*',
                    redirect:"/"
                }
            ],
            <!-- 路由类型： 默认为 hash  -->
            mode:"history",
            <!-- 滚动控制 -->
            ,scrollBehavior( to ,from , savedPosition ){
                if( savedPosition ){
                return savedPosition
                }else{
                return { x:0,y:0 }
                }
            }
        });

        export default router;

        redirect属性：重定向路由

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
            <router-link to="/" tag="div" >主页</router-link>
            <router-link to="/login" >登录页</router-link>
            <router-link to="/about" >关于页</router-link>
        </div>

        tag属性：指定路由最终渲染的html标签，默认为 a 标签

    路由守卫：
        全局守卫 路由跳转之前触发，需要手动执行 next() 否则路由不会跳转：
        router.beforeEach( ( to ,from ,next )=>{
            console.log("没有登陆");
            next();
        });
        
        后置钩子：
        router.afterEach((to ,from )=>{

        })
    路由控制滚动条：
    scrollBehavior 函数
    
    scrollBehavior( to , from , savedPosition )

    三个参数分别为：即将进入的路由 ，出发的路由 ，已经保存的滚动条进度
    
