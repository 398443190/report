import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/vcharts.js'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'
import './style/index.css'

Vue.prototype.$echarts = ECharts
Vue.component('v-chart', VueECharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
