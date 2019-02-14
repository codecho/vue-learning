import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Language from '../views/Language.vue'
import Company from '../views/Company.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'language',
                    component: Language
                },
                {
                    path: 'company',
                    component: Company
                },
                {
                    path: '',
                    component: Language
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})
