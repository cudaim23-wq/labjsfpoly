import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { token } from '@/Labs/Lab-7/auth'

const routes = [
  { path: '/', component: HomeView },
  { path: '/lab-1', component: () => import('@/views/Lab1View.vue') },
  { path: '/lab-2', component: () => import('@/views/Lab2View.vue') },
  { path: '/lab-3', component: () => import('@/views/Lab3View.vue') },
  { path: '/lab-4', component: () => import('@/views/Lab4View.vue') },
  { path: '/lab-5', component: () => import('@/views/Lab5View.vue') },
  { path: '/lab-6', component: () => import('@/views/Lab6View.vue') },
  {
    path: '/lab-7',
    component: () => import('@/Labs/Lab-7/Lab7Layout.vue'),
    children: [
      { path: '', component: () => import('@/Labs/Lab-7/Bai-1/Home.vue') },
      { path: 'about', component: () => import('@/Labs/Lab-7/Bai-1/About.vue') },
      { path: 'product/:id', component: () => import('@/Labs/Lab-7/Bai-2/ProductDetail.vue') },
      { path: 'login', component: () => import('@/Labs/Lab-7/Bai3.vue') },
      {
        path: 'dashboard',
        component: () => import('@/Labs/Lab-7/Bai-4/Dashboard.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !token.value) {
    return { path: '/lab-7/login', query: { redirect: to.fullPath } }
  }
})

export default router
