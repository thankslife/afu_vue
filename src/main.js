import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import ajax from './config/ajax'
import FastClick from 'fastclick'
import $ from 'jquery'
import './style/common.css'
import './config/rem'

Vue.config.productionTip = false

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
}).$mount('#app')
