import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../modules/Home'
import Colors from '../modules/Colors'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
      meta: {
        tab: 0
      }
    },
    {
      name: 'colors',
      path: '/colors',
      component: Colors,
      meta: {
        tab: 1
      }
    }
  ]
})

export default router
