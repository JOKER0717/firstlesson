import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import My from './views/My.vue'

Vue.use(Router)

export default new Router({
  // http:'//localhost:8080/my'
  node:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
        {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/my',
      name: 'my',
      // component: My
      component:() => import(/* webpackChunkName: "about" */ './views/My.vue')
    },
    {
      path: '/car',
      name: 'car',
      // component: My
      component:() => import(/* webpackChunkName: "about" */ './views/Car.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      // component: My
      component:() => import(/* webpackChunkName: "about" */ './views/Mine.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      // component: My
      component:() => import(/* webpackChunkName: "about" */ './views/Detail.vue')
    }
  ]
})
