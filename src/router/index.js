import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../view/home/index.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../view/home/index/index.vue')
        },
        {
          path: '/test',
          name: 'test',
          component: () => import('../view/home/test/index.vue')
        }
      ]
    }
  ]
})
