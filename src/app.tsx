import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { OTPInput8 } from '@8bu/vue-otp-input';
import '@8bu/vue-otp-input/dist/vue-otp-input.css';
import './app.scss';

@Component({
  name: 'App',
  components: {
    'otp-input': OTPInput8,
  },
})
export default class App extends Vue {
  protected render() {
    return (
      <section class="app-container">
        <otp-input class="app-input" fieldClass="app-field" />
      </section>
    );
  }
}
