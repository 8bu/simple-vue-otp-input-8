declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module NodeJS {
  interface Global {
    vue: typeof Vue;
  }
}
