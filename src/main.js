import Vue from 'vue'
import App from './App.vue'

import imagePreloader from 'vue-image-preloader'
Vue.use(imagePreloader)

Vue.config.productionTip = false
Vue.config.devtools = true

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-127959651-1',
  checkDuplicatedScript: true,
  autoTracking: {
    screenview: true
  }
})

new Vue({
  render: h => h(App)
}).$mount('#retrozbiory-app')