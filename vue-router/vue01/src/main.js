import Vue from 'vue'
import App from './App.vue'

// import VueRouter from 'vue-router'
import router from './router'

// import About from './views/About.vue'
// import Home from './views/Home.vue'

// Vue.use(VueRouter)

// 定义路由
// const routes = [
//     {path: '/home', component: Home},
//     {path: '/about', component: About}
// ]

// 创建路由实例
// const router = new VueRouter({
//     routes       // 相当于 routes: routes
// })

Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
