import { createApp } from 'vue'
import App from './App.vue'
import i18n from './lang/i18n'
import store from "./store.js"

import './index.css';
import './assets/css/style.css';

import router from './router'

createApp(App).use(store).use(i18n).use(router).mount('#app');
