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
      <form class="app-container" onSubmit={this.onSubmit}>
        <otp vModel={this.token} />
        <input type="text" vModel={this.token}/>
      </form>
    );
  }

  private onSubmit() {
    this.$emit('submit');
    // eslint-disable-next-line
    alert('SUBMIT');
  }
}
