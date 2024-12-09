import { createApp } from 'vue'
import './style.css'
import {createHead} from "@vueuse/head";
import App from './App.vue'
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import routes from "./routes.js";
import axios from 'axios';
import store from './store';


axios.defaults.baseURL = 'https://example.com/api';
axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_ACCESS_TOKEN';

const head = createHead();

const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App)
app.use(head)
app.use(router)
app.mount('#app')
app.use(store);


app.config.globalProperties.$axios = axios;