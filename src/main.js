import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

srikrisha tours and travels
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
