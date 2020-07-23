import Vue from "vue";
import App from "./App.vue";
import VueGeolocation from "vue-browser-geolocation";
import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.use(VueGeolocation);

new Vue({
  render: (h) => h(App),
}).$mount("#app");