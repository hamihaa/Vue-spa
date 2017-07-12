/**
 * Created by Miha on 08-Jul-17.
 */

import VueRouter from 'vue-router';

let myRoutes = [
    {
        path:'/',
        component: require('./views/Home.vue')
    },
    {
        path: '/search',
        component: require('./views/Search.vue')
    },
    {
        path: '/contact',
        component: require('./views/Contact.vue')
    }
];

export default new VueRouter({
    routes: myRoutes,
    linkActiveClass : 'link-is-active'
})