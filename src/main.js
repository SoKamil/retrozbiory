import Vue from 'vue'
import App from './App.vue'

// import VueMasonryPlugin from 'vue-masonry'
const { VueMasonryPlugin } = require('vue-masonry')
Vue.use(VueMasonryPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#retro-app')