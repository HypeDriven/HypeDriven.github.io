import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/css/fonts.css';
import './assets/css/main.css';
import './assets/css/reset.css';
import './assets/css/style.css';
import SplitCarousel from "vue-split-carousel";


import './assets/css/components/footer.css';
import './assets/css/components/header.css';
import './assets/css/components/menu.css';
import './assets/css/jquery.rcrumbs.css';

import router from './router'
createApp(App).use(router).use(SplitCarousel).mount('#app');
