# Simple Vue OTP Style Input

[![GitHub Release][releases-shield]][releases]
[![GitHub Activity][commits-shield]][commits]
[![License][license-shield]](LICENSE)
[![BuyMeCoffee][buymecoffeebadge]][buymecoffee]


> Only support Vue.js 2.2.x+

> Any polyfill error (missing functions...etc) can be fixed by import polyfill lib or config polyfill for webpack & babel. I removed all polyfill due to this [recommend](https://cli.vuejs.org/guide/browser-compatibility.html#polyfills-when-building-as-library-or-web-components)

![alt text][exampleimg]

### [Working demo](https://codepen.io/8ee/pen/NWPWEQN)

## Installation

#### Global:

```javascript
// main
import Vue from 'vue';
import OTPInput from '@8bu/vue-otp-input';
Vue.use(OTPInput);

```
----------------
#### Component:
```html
<script>
import OTPInput from '@8bu/vue-otp-input';
import '@8bu/vue-otp-input/';
module.export = {
  name: 'you-component',
  components: {
    'otp-input': OTPInput,
  }
}
</script>

```

## Usage

```html
<template>
  <otp-input
    v-model="userToken"
    class="field-container"
    :length="6"
    pattern="[^0-9]+"
    :ignorePattern="false"
    fieldClass="custom-field-class"
    :size="32"
    @valid="isTokenComplete"
    disabled={false}
  />
</template>
```

## Properties

> `v-model` is supported by default.

Prop | Type | Required | Default | Description
-- | -- | -- | -- | --
`class` | `string` | ❌ | ❌ | Outer class container
`length` | `number/string` | ✔️ | `4` | Number of expected characters
`pattern` | `string` | ❌ | `[^0-9]+` | Regex pattern of individual character input
`ignorePattern` | `boolean` | ❌ | `false` | Turn off character validation
`fieldClass` | `string` | ❌ | ❌ | Custom class for each input character
`size` | `number/string` | ❌ | `16` | Font size of input character (input size = 1.75 x font size).
`disabled` | `boolean` | ❌ | `false` | Working like native disabled
`password` | `boolean` | ❌ | `false` | Change all input type to password

## Events

Name | Param: Type | Description
-- | -- | --
`change` | `value: string` | Return string result of user input
`valid` | `isValid: boolean` | Validate whenever user input to see if the input have been fully filled.


## Limitation
Mobile devices may not have paste & backscape/delete feature. I'm working on another approach for this issue.

## Change logs
From v1.1.x++, I will note some simple change log to keep track my changes.

### 1.2.0
---------------------
- Fix mobile input issue
- Update new prop `password` for changing input type to password

## Contributions are welcome!

If you want to contribute to this please read the [Contribution guidelines](CONTRIBUTING.md)

*** 

[buymecoffee]: https://www.buymeacoffee.com/shQKMc9
[buymecoffeebadge]: https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?style=flat-square&logo=buy-me-a-coffee
[commits-shield]: https://img.shields.io/github/last-commit/8bu/simple-vue-otp-input-8?style=flat-square
[commits]: https://github.com/8bu/simple-vue-otp-input-8/commits/master
[exampleimg]: https://i.imgur.com/9Lhb2bh.gif
[license-shield]: https://img.shields.io/github/license/8bu/simple-vue-otp-input-8.svg?style=flat-square&logo=appveyor
[releases-shield]: https://img.shields.io/npm/v/@8bu/vue-otp-input?style=flat-square
[releases]: https://www.npmjs.com/package/@8bu/vue-otp-input
