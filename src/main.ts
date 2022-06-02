import { createApp } from "vue";
import App from "./App.vue";
import VueFeather from "vue-feather";
import router from "./router";
import { store } from "./store";

createApp(App).use(router).use(store).component("icon", VueFeather).mount("#app");
