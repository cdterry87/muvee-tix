import { SET_CART } from './mutation-types'

export default {
  namespaced: true,
  state: {
    cart: {}
  },
  mutations: {
    [SET_CART](state, cart) {
      state.cart = cart
    }
  },
  actions: {
    setCart({ commit }, cart) {
      commit(SET_CART, cart)
    }
  },
  getters: {
    movie: state => {
      return state.movie
    },
    seats: state => {
      return state.seats
    },
    payment: state => {
      return state.payment
    }
  }
}
