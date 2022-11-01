const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
      ? '/usermanagement-app/'
      : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/variables.scss";`
      }
    }
  }
});


