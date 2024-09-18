import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayoutView from '@/views/FrontLayout.vue'

const routes =  [
  {
    path: '/',
    name: 'FrontLayout',
    component: FrontLayoutView,
    children:[
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/front/HomeView.vue')
      },
      {
        path: 'login',
        component: () => import('@/views/front/LoginView.vue')
      },
      {
        name: 'products',
        path: 'products',
        component: () => import('@/views/front/UserProducts.vue')
      },
      {
        name: 'product',
        path: 'product/:productId',
        component: () => import('@/views/front/UserProduct.vue')
      },
      {
        path: 'cart',
        component: () => import('@/views/front/UserCart.vue')
      },
      {
        path: 'checkout',
        component: () => import('@/views/front/UserCheckOut.vue')
      },
      {
        path: 'checkorder/:orderId',
        component: () => import('@/views/front/UserCheckOrder.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/views/back/DashBoardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/back/ProductsView.vue')
      
      },
      {
        path: 'orders',
        component: () => import('@/views/back/OrdersView.vue')
      },
      {
        path: 'coupons',
        component: () => import('@/views/back/CouponsView.vue')
      }        
    ]
  },  
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior () {
    return { top: 0, behavior: "smooth" };
  }
})

export default router
