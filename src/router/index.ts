import { createWebHistory, createRouter } from 'vue-router'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Login },
    { path: '/home', component: Home }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router