import AppComponent from './app';
import Bar from './app';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: AppComponent},
    { path: '/bar', component: Bar},
    
]

new Vue({
    el: '#app',
    router: new VueRouter({
        mode: 'history',
        routes: routes
    })
})