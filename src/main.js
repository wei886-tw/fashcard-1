import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';

// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入 Bootstrap JS（如果需要交互功能，例如下拉選單或模態框）
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/all.scss';
import "bootstrap-icons/font/bootstrap-icons.css";


const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
