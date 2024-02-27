import { createApp } from 'vue'
import App from './App.vue'
import i18n from './lang/i18n'
// import store from "./store.js"
import store from "./store/index.js"

import './index.css';
import './assets/css/style.css';

import router from './router'

import CKEditor from '@ckeditor/ckeditor5-vue';
import './assets/css/ckeditor-reset.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDihu6ud-78ZzD5tNYUz7HHpnSWjddq9hg",
  authDomain: "hypedriven-auth.firebaseapp.com",
  projectId: "hypedriven-auth",
  storageBucket: "hypedriven-auth.appspot.com",
  messagingSenderId: "554403789600",
  appId: "1:554403789600:web:106f93c25347e623903545",
  measurementId: "G-RPDTQ3NYKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

createApp(App).use(i18n).use(store).use(router).use(CKEditor).mount('#app');
