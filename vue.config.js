const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
});

module.exports ={
  publicPath: process.env.NODE_ENV === 'production'
      ? '/usermanagement-app/'
      : '/'
}

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/variables.scss";`
      }
    }
  }
}
