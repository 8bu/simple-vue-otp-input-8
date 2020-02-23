import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import OTPInput8 from './components/OTPInput/index';

@Component({
  name: 'App',
  components: {
    otp: OTPInput8,
  },
})
export default class App extends Vue {
  private token = '1234';

  protected render() {
    return (
      <section class="app-container">
        <otp vModel={this.token} disabled />
        <input type="text" vModel={this.token}/>
      </section>
    );
  }
}
