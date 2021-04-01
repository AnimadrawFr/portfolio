import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VAnimateCss from 'v-animate-css'
import VueFbCustomerChat from 'vue-fb-customer-chat'
import i18n from './i18n'
import VueMeta from 'vue-meta'
 
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.use(VAnimateCss)
Vue.use(VueFbCustomerChat, {
  page_id: 103299608158441, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'fr_FR', // default 'en_US'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
