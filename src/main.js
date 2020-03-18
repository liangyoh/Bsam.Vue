import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入http组件
import api from './api/http'
// http组件绑定到全局 $api
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
