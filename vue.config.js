module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'Weather',
    themeColor: '#006699',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    display: "standalone",
    icons: {
      favicon32: 'img/icons/icon-72x72.png',
      favicon16: 'img/icons/icon-72x72.png',
      appleTouchIcon: 'img/icons/icon-152x152.png',
      maskIcon: 'img/icons/icon-384x384.png',
      msTileImage: 'img/icons/icon-152x152.png'
    }
  }

  // // configure the workbox plugin
  // workboxPluginMode: 'InjectManifest',
  // workboxOptions: {
  //   // swSrc is required in InjectManifest mode.
  //   swSrc: 'dev/sw.js',
  //   // ...other Workbox options...
  // }

}