import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import createRouter from './router'

Vue.use(Router)
Vue.config.productionTip = false

const router = createRouter()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
