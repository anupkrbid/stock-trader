// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-stock-trader-b0092.firebaseio.com/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
