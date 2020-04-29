import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "@aws-amplify/ui-vue";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

Vue.config.productionTip = false;

Notification.requestPermission(function(status) {
  console.log("Status ", status);
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
