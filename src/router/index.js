import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () =>
      import(/* webpackChunkName: "movie" */ '../views/Movie.vue')
  },
  {
    path: '/seats',
    name: 'Seats',
    component: () =>
      import(/* webpackChunkName: "seats" */ '../views/Seats.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () =>
      import(/* webpackChunkName: "payment" */ '../views/Payment.vue')
  },
  {
    path: '*',
    name: 'NotFound',
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
