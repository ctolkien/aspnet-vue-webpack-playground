import AppComponent from './app.vue';
import Bar from './app.vue';

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
    }),
    render: h => h('router-view')
})