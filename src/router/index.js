import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router