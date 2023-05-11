import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/service.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/support.vue')
    },
  ]
})

export default router
