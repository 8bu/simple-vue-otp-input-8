declare module '@8bu/vue-otp-input' {
  import _Vue, { PluginFunction } from 'vue';

  class OTPInput8 extends _Vue { }
  class Plugin extends OTPInput8 {
    install: PluginFunction<any>;
  }
  export default Plugin;
  export { OTPInput8 };
}
