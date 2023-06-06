import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home/Home.vue";
import Favourites from "../views/Favourites/Favourites.vue";
import MoviePage from "../views/MoviePage/MoviePage.vue"

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        props: { searchQuery: 'hasSearchQuery' }
    },
    {
        path: '/favourites',
        name: 'favourites',
        component: Favourites
    },
    {
        path: '/description',
        name: 'description',
        component: MoviePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: '/',
    routes,
})

export default router