
import OurVue, { VueConstructor } from 'vue';
import OTPInput8 from './components/OTPInput/index';
import './components/OTPInput/index.scss';

declare global {
  interface Window { OTPInput8: any; Vue: typeof OurVue }
}

const install = (Vue: VueConstructor) => {
  if ((install as any).installed) return;
  (install as any).installed = true;
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
