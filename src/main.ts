import Vue from 'vue';
import OTPInput from '@8bu/vue-otp-input';
import App from './app';

Vue.config.productionTip = false;
Vue.use(OTPInput);
console.log(OTPInput);
new Vue({
  render: h => h(App),
}).$mount('#app');
