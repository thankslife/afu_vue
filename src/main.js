import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import fetch from './config/fetch'
import FastClick from 'fastclick'
import store from './store'
import $ from 'jquery'
import './style/common.css'
import './config/rem'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
})

new Vue({
    router,
    store,
}).$mount('#app')
