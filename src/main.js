import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import myVuex from './store/index'
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  store:myVuex,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
