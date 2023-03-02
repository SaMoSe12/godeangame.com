import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/devlog',
        name: 'devlog',
        component: () => import('../views/Devlog.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/Contact.vue'),
    },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;