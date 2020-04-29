import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

Vue.config.productionTip = false;

Notification.requestPermission(function(status) {
  console.log("Status ", status);
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
