import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import vTitle from "vuejs-title";

// Main Page
import App from "../src/App.vue";

// Main Style
import "@style/sass/app.scss";

// router
import router from "./router";

// Global Components
import BaseButton from "@components/base/BaseButton.vue";

// Plugins
Vue.use(PiniaVuePlugin);
Vue.use(vTitle, {
  cssClass: "tooltip",
});

// Components
Vue.component("BaseButton", BaseButton);

new Vue({
  pinia: createPinia(),
  render: (createEl) => createEl(App),
  router,
}).$mount("#module-root");
