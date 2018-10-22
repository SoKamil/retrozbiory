import Vue from 'vue'
import App from './App.vue'

import imagePreloader from 'vue-image-preloader'
Vue.use(imagePreloader)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#retro-app')