import Vue from 'vue'
import router from './Router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
