import Vue from 'vue'
import App from './App.vue'
import './static/css/base.css'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
