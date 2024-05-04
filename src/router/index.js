import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutUsView.vue')
    // },
    {
      path: '/malis-pp',
      name: 'malispp',
      component: () => import('../views/MalisPPView.vue')
    },
    {
      path: '/malis-sr',
      name: 'malissr',
      component: () => import('../views/MalisSRView.vue')
    },
    {
      path: '/about-us',
      name: 'aboutus',
      component: () => import('../views/AboutUs/AboutUsView.vue')
    },
    {
      path: '/about-us/our-chefs',
      name: 'ourchefs',
      component: () => import('../views/AboutUs/OurChefsView.vue')
    },
    {
      path: '/about-us/signature-dishes',
      name: 'signaturedishes',
      component: () => import('../views/AboutUs/SignatureDishesView.vue')
    },
    {
      path: '/about-us/legal-notice',
      name: 'legal-notice',
      component: () => import('../views/AboutUs/LegalNoticeView.vue')
    },
    {
      path: '/malis-sr',
      name: 'malissr',
      component: () => import('../views/MalisSRView.vue')
    },
    {
      path: '/malis-sr',
      name: 'malissr',
      component: () => import('../views/MalisSRView.vue')
    },
    // {
    //   path: '/about-us',
    //   component: () => import('../views/AboutUs/AboutUsView.vue'),
    //   children: [
    //     // Nested routes for sub-pages
    //     {
    //       path: '', // Default route for About Us (optional)
    //       component: () => import('../views/AboutUs/AboutUsView.vue')
    //     },
    //     {
    //       path: 'our-chefs',
    //       name: 'OurChefs',
    //       component: () => import('../views/AboutUs/OurChefsView.vue')
    //     },
    //     {
    //       path: 'signature-dishes',
    //       name: 'SignatureDishes',
    //       component: () => import('../views/AboutUs/SignatureDishesView.vue')
    //     },
    //     {
    //       path: 'legal-notice',
    //       name: 'LegalNotice',
    //       component: () => import('../views/AboutUs/LegalNoticeView.vue')
    //     }
    //   ]
    // },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
