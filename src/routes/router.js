import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home';
import Videos from '@/pages/Videos';
import Sobre from '@/pages/Sobre';
import Contato from '@/pages/Contato';
import Testeapi from '@/pages/Testeapi';

const routes = [
    {
        path:'/teste/',
        component: Home
    },
    {
        path:'/teste/videos',
        component: Videos
    },
    {
        path:'/teste/sobre',
        component: Sobre
    },
    {
        path:'/teste/contato',
        component: Contato
    },
    {
        path:'/teste/testeapi',
        component: Testeapi
    },
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;