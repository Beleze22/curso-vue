import Vue from 'vue'
import App from './App.vue'
//eslint-disable-next-line
import Contador from './Contador-multi.vue'

Vue.config.productionTip = false
Vue.component('app-contador', Contador)

new Vue({
  render: h => h(App),
}).$mount('#app')
