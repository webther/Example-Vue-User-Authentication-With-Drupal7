import Vue from 'vue'
import Router from 'vue-router'
import DashboardIndex from '@/views/DashboardIndex'
import AboutIndex from '@/views/AboutIndex'
import UserLogin from '@/views/UserLogin'
import UserLogout from '@/views/UserLogout'
import store from '../store'

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['user/isAuthenticated']) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters['user/isAuthenticated']) {
    next()
    return
  }
  next('/user/login')
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      alias: '/',
      name: 'DashboardIndex',
      component: DashboardIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/about',
      name: 'AboutIndex',
      component: AboutIndex
    },
    {
      path: '/user/login',
      name: 'UserLogin',
      component: UserLogin,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/user/logout',
      name: 'UserLogout',
      component: UserLogout,
      beforeEnter: ifAuthenticated
    }
  ]
})
