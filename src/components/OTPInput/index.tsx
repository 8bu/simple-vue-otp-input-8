import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { EKeyCode } from './index.helper';
import './index.scss';
@Component({
  name: 'otp-input',
  model: {
    prop: 'value',
    event: 'change',
  },
})
export default class OTPInput8 extends Vue {
  protected inputArray: string[] = [];

  @Prop({ default: 4 }) protected length!: number;

  @Prop() protected value!: string;

  @Prop({ default: '[^0-9]+' }) private pattern!: string;

  @Prop({ default: false }) private ignorePattern!: boolean;

  @Prop({ default: '' }) private fieldClass!: string;

  @Prop({ default: 16 }) private size!: number | string | boolean;

  private currentIndex: number = -1;

  private get regexPattern() {
    return new RegExp(this.pattern, 'gm');
  }

  @Watch('length', { immediate: true })
  protected onLengthChange(newLength: number, oldLength: number) {
    let oldArr: string[] = [...this.inputArray];
    let diff = 0;
    if (oldLength !== newLength) {
      diff = newLength - (oldLength || 0);
      if (diff < 0) {
        oldArr.splice(oldLength - 1 - diff, Math.abs(diff));
      } else {
        oldArr = [...oldArr, ...(new Array(diff).fill(''))];
      }
    }
    this.inputArray = oldArr;
  }

  @Watch('inputArray')
  protected onInputArrChange(value: string[]) {
    if (this.currentIndex > -1) {
      const inputString = value.join('');
      this.$emit('change', inputString);
      this.$emit('valid', inputString.length === this.length);
    }
  }

  @Watch('value', { immediate: true })
  protected onValueChange(val: string) {
    if (this.currentIndex < 0) {
      this.setStringValue(val);
    }
  }

  protected render() {
    return (
      <ul class="otp-input-8" style={{ fontSize: `${Number(this.size) / 16}rem` }}>
        {new Array(this.length).fill('').map((field: string, index: number) => (
            <li class={['otp-input-8-field', this.fieldClass]}>
              <input
                data-index={index}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onPaste={this.handlePaste}
                onkeydown={this.handleKey}
                value={this.inputArray[index]}
                key={index}
                ref={`otpFields-${index}`}
                required
              />
            </li>
        ))}
      </ul>
    );
  }

  // Controls
  private updateByIndex(value: string) {
    this.$set(this.inputArray, this.currentIndex, value);
  }

  private goToPrev() {
    const nextRef = `otpFields-${this.currentIndex - 1}`;
    (this.$refs[nextRef] as HTMLInputElement).focus();
    (this.$refs[nextRef] as HTMLInputElement).select();
  }

  private goToNext() {
    const nextRef = `otpFields-${this.currentIndex + 1}`;
    (this.$refs[nextRef] as HTMLInputElement).focus();
    (this.$refs[nextRef] as HTMLInputElement).select();
  }

  // Event handlers
  private handleFocus(e: Event) {
    e.preventDefault();
    this.currentIndex = Number((e.target as HTMLInputElement).dataset.index);
  }

  private handleBlur() {
    this.currentIndex = -1;
  }

  private handlePaste(e: ClipboardEvent) {
    e.preventDefault();
    const pastedData = String((e.clipboardData as DataTransfer).getData('text/plain'));
    this.setStringValue(pastedData);
  }

  private setStringValue(str: string) {
    const normalizeIndex = this.currentIndex < 0 ? 0 : this.currentIndex;
    const formattedData = !this.ignorePattern ? str.replace(this.regexPattern, '') : str;
    const trimmedData = formattedData.slice(0, this.length - normalizeIndex).split('');
    const lengthToLoop = this.currentIndex < 0 ? this.length : trimmedData.length;
    for (let i = 0; i < lengthToLoop; i += 1) {
      if (this.currentIndex < 0) {
        this.$set(this.inputArray, normalizeIndex + i, trimmedData[i] || '');
      } else {
        this.$set(this.inputArray, normalizeIndex + i, trimmedData[i]);
      }
    }
  }

  private handleKey(e: KeyboardEvent) {
    if (!e.ctrlKey) {
      e.preventDefault();
      const key = e.keyCode;
      const stringKey = `${e.key}`;
      const isValid = this.ignorePattern ? true : !stringKey.match(this.pattern);
      const hasValue = this.inputArray[this.currentIndex].length === 0;
      switch (key) {
        case EKeyCode.BACKSPACE:
        case EKeyCode.DELETE:
          this.updateByIndex('');
          if (hasValue && this.currentIndex - 1 > -1) {
            this.goToPrev();
          }
          break;
        case EKeyCode.LEFT_ARROW:
          if (this.currentIndex - 1 > -1) {
            this.goToPrev();
          }
          break;
        case EKeyCode.RIGHT_ARROW:
          if (this.currentIndex + 1 < this.length) {
            this.goToNext();
          }
          break;
        default:
          if (isValid) {
            this.updateByIndex(stringKey);
            if (this.currentIndex + 1 < this.length) {
              this.goToNext();
            }
          }
          break;
      }
    }
  }
}
