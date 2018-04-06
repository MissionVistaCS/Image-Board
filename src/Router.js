import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import Catalog from './components/Catalog'
import Thread from './components/Thread'
import About from './components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
        path: '/catalog/:board',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/:board/thread/:thread'
        name: 'Thread',
        component: Thread
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
