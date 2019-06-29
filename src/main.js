import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { mapActions } from 'vuex';

Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  methods: {
    ...mapActions(['queueNotice', 'resetNotices'])
  },
  beforeMount() {
    this.$on('app-error', (message) => { this.resetNotices(); this.queueNotice({type: 'error', content: message});});
    this.$on('app-info', (message) => { this.queueNotice({type: 'info', content: message});});
  }
}).$mount('#app')
