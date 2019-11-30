import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import './app.scss';

@Component({
  name: 'App',
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
