import _Vue, { VueConstructor } from 'vue';
import OTPInput8 from './components/OTPInput/index';
import './components/OTPInput/index.scss';

export function install(Vue: VueConstructor) {
  if ((install as any).installed) return;
  (install as any).installed = true;
  Vue.component('otp-input', OTPInput8);
}
declare global {
  interface Window { Vue: typeof _Vue }
}

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue;
}

class Plugin extends OTPInput8 {
  static install = install;
}

if (GlobalVue) {
  (GlobalVue as any).use(Plugin);
}

export default Plugin;
export { OTPInput8 };
