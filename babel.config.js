module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      plugins: [
        ['transform-define', {
          '__VUE_I18N_FULL_INSTALL__': false,
          '__VUE_I18N_LEGACY_API__': false,
          '__VUE_I18N_PROD_DEVTOOLS__': false,
        }],
      ],
    }]
  ],
};
