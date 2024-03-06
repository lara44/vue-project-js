
import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue';
import login from '../views/Login.vue';

const routes = [
    {
        path: '/',
        redirect: 'login',
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/home',
        name: 'home',
        component: home,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router