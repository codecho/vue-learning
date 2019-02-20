import Vue from 'vue'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store   // Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中
}).$mount('#app')
