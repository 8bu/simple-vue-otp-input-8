import OTPInput8 from './components/OTPInput/index';

function install(Vue) {
  if ((install as any).installed) return;
  (install as any).installed = true;
  Vue.component('otp-input', OTPInput8);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = (global as any).vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

(OTPInput8 as any).install = install;

export default component;
