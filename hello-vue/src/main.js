import Vue from 'vue'
import App from './App.vue'

import HelloAPI from '@/services/HelloAPI'

Vue.config.productionTip = false

// this is the vue object, making a new method attached to it called $hello_api
Vue.prototype.$hello_api = HelloAPI

new Vue({
  render: h => h(App),
}).$mount('#app')
