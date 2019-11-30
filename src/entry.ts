import _Vue from 'vue';
import OTPInput8 from './components/OTPInput/index';

declare global {
  interface Window { OTPInput8: any; Vue: typeof _Vue }
}

const install = (Vue: typeof _Vue) => {
  Vue.component(OTPInput8.name, OTPInput8);
};

const PluginOTPInput8 = {
  install,
};
if (typeof window !== 'undefined' && window.Vue) {
  window.OTPInput8 = OTPInput8;
  window.Vue.use(PluginOTPInput8);
}


export default PluginOTPInput8;
export { OTPInput8 };
