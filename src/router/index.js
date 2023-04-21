import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/home.vue')
    },
    {
      path: '/useone',
      name: 'useone',
      component: () => import('../views/useone.vue')
    },
    {
      path: '/usetwo',
      name: 'usetwo',
      component: () => import('../views/usetwo.vue')
    },
    {
      path: '/usethree',
      name: 'usethree',
      component: () => import('../views/usethree.vue')
    }
  ]
})

export default router
