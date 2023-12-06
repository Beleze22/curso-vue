import Vue from 'vue'
import App from './App.vue'
//eslint-disable-next-line
import Contadores from './Contadores.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
