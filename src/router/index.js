import Vue from 'vue'
import Router from 'vue-router'
import { constantComponents } from './components'

Vue.use(Router)

/**
 * ! NOTICE
 * This router instance should not be added directly without
 * `PERMISSION/index` processing.
 */
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: constantComponents.pagesHome
    },
    {
      path: '/login',
      name: 'login',
      component: constantComponents.pagesLogin,
      meta: {
        layout: 'plain'
      }
    }
  ]
})