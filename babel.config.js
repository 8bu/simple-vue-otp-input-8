module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset',
      {
        targets: {
          ie: '11',
          browsers: 'last 2 versions',
        },
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
      },
    ],
  ],
};
