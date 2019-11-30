# Simple Vue OTP Style Input

[![GitHub Release][releases-shield]][releases]
[![GitHub Activity][commits-shield]][commits]
[![License][license-shield]](LICENSE)
[![BuyMeCoffee][buymecoffeebadge]][buymecoffee]



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
    class="field-container"
    :length="6"
    pattern="[^0-9]+"
    :ignorePattern="false"
    fieldClass="custom-field-class"
    :size="32"
  />
</template>
```

## Properties

Prop | Type | Required | Default | description
-- | -- | -- | -- | --
`class` | `string` | ❌ | ❌ | Outer class container
`length` | `number | string` | ✔️ | `4` | Number of expected characters
`pattern` | `string` | ❌ | `[^0-9]+` | Regex pattern of individual character input
`ignorePattern` | `boolean` | ❌ | `false` | Turn off character validation
`fieldClass` | `string` | ❌ | ❌ | Custom class for each input character
`size` | `string | number` | ❌ | `16` | Font size of input character (input size = 1.75 x font size).

## Contributions are welcome!

If you want to contribute to this please read the [Contribution guidelines](CONTRIBUTING.md)

*** 

[buymecoffee]: https://www.buymeacoffee.com/shQKMc9
[buymecoffeebadge]: https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?style=flat-square&logo=buy-me-a-coffee
[commits-shield]: https://img.shields.io/github/last-commit/8bu/simple-vue-otp-input-8?style=flat-square
[commits]: https://github.com/8bu/simple-vue-otp-input-8/commits/master
[exampleimg]: example.png
[license-shield]: https://img.shields.io/github/license/8bu/simple-vue-otp-input-8.svg?style=flat-square&logo=appveyor
[releases-shield]: https://img.shields.io/npm/v/@8bu/vue-otp-input?style=flat-square
[releases]: https://www.npmjs.com/package/@8bu/vue-otp-input
