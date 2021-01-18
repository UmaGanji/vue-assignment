import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

// import Bootstrap from 'bootstrap'


Vue.use(BootstrapVue)

extend('email', email);
extend('required', required)

Vue.component('ValidationProvider', ValidationProvider);
// Vue.use(Bootstrap)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
