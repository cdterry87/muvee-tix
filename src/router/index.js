import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'movie',
    props: true,
    component: () =>
      import(/* webpackChunkName: "movie" */ '../views/Movie.vue')
  },
  {
    path: '/seats',
    name: 'seats',
    component: () =>
      import(/* webpackChunkName: "seats" */ '../views/Seats.vue')
  },
  {
    path: '/snacks',
    name: 'snacks',
    component: () =>
      import(/* webpackChunkName: "seats" */ '../views/Snacks.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () =>
      import(/* webpackChunkName: "payment" */ '../views/Payment.vue')
  },
  {
    path: '/summary',
    name: 'summary',
    component: () =>
      import(/* webpackChunkName: "summary" */ '../views/Summary.vue')
  },
  {
    path: '*',
    name: 'notfound',
    component: () =>
      import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
