import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: () => import('@/components/Home')
        },
        {
            path: "/posts",
            component: () => import('@/components/Post')
        }
    ]
})

import('bootstrap/dist/css/bootstrap.css')

new Vue({
    router,
    render: (h) => h('router-view')
})
    .$mount('#app')