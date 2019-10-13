import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register')
  },

  // 首页路由配置
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/Landing')
  },
    // Statistics Page
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('@/views/StatisticsPage')
  },
  // 其他未配置的路由都跳转到首页
  {
    path: '*',
    // 重定向
    redirect: '/'
  }

]

const router = new Router({
  mode: 'history',
  routes
})

export default router
