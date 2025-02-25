import { createWebHistory, createRouter } from 'vue-router'
import CallbackView from '../views/CallbackView.vue'
import test from '../views/routerViews/test.vue'

const routes = [
    {
        path: '/home',
        component: test
    },
    {
        path: '/callback',
        name: 'callback',
        component: CallbackView
    },
    {
        path: '/',
        redirect: '/home'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router