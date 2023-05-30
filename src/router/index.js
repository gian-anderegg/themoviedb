import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home/Home.vue";
import Favourites from "../views/Favourites/Favourites.vue";

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