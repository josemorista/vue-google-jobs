import { createApp } from 'vue';
import App from './App.vue';
import VueFeather from 'vue-feather';
import router from './router';

createApp(App).use(router).component("icon", VueFeather).mount('#app');
