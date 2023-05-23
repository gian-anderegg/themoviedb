import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home/Home.vue";
import Favourites from "../pages/Favourites/Favourites.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/favourites',
        name: 'favourites',
        component: Favourites
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: '/',
    routes,
})

export default router