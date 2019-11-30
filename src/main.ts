import Vue from 'vue';
import OTPInput2 from '@8bu/vue-otp-input';
import OTPInput from '@/entry';
import App from './app';

Vue.config.productionTip = false;
Vue.use(OTPInput);
new Vue({
  render: h => h(App),
}).$mount('#app');

console.log(OTPInput, OTPInput2);
