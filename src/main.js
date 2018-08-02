import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.headers.common['Content-Type'] = 'application/json'
const token = sessionStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token
}

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
