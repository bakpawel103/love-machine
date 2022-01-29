module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'https://love-machine-app.herokuapp.com:9000/'
  }
}
