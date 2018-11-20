import Vue from 'vue'
import Vuerouter from 'vue-router'
import {rpoutes} from './routes'
import {store} from './store/store.js'
import Accounting from 'accounting-js'
import App from './App.vue'

Vue.use(VueRouter)



const router = new VueRouter ({
routes,
mode: 'history',
scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
    }
  }
}
})
Vue.filter('currency', function(val){
return Accounting.formatMoney(val)
})
// Vue.component('global-component', ()=> ('./components/Menu.vue')) 


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
