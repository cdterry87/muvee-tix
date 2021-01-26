import {
  SET_CART_MOVIE,
  SET_CART_DATE,
  SET_CART_TIME,
  SET_CART_TICKETS,
  SET_CART_SEATS,
  SET_CART_PAYMENT
} from './mutation-types'

const state = () => ({
  cart: {
    movie: '',
    date: '',
    time: '',
    tickets: {
      adults: 0,
      kids: 0,
      seniors: 0
    },
    seats: [],
    payment: {}
  },
  prices: {
    adults: 14,
    kids: 10,
    seniors: 12
  }
})

const getters = {
  movie: state => state.cart.movie,
  date: state => state.cart.date,
  time: state => state.cart.time,
  tickets: state => state.cart.tickets,
  seats: state => state.cart.seats,
  payment: state => state.cart.payment,
  total: state => {
    const adultTotalPrice = state.cart.tickets.adults * state.prices.adults
    const kidTotalPrice = state.cart.tickets.kids * state.prices.kids
    const seniorTotalPrice = state.cart.tickets.seniors * state.prices.seniors
    return adultTotalPrice + kidTotalPrice + seniorTotalPrice
  }
}

const actions = {
  setCartMovie({ commit }, movie) {
    commit(SET_CART_MOVIE, movie)
  },
  setCartDate({ commit }, date) {
    commit(SET_CART_DATE, date)
  },
  setCartTime({ commit }, time) {
    commit(SET_CART_TIME, time)
  },
  setCartTickets({ commit }, tickets) {
    commit(SET_CART_TICKETS, tickets)
  },
  setCartSeats({ commit }, seats) {
    commit(SET_CART_SEATS, seats)
  },
  setCartPayment({ commit }, payment) {
    commit(SET_CART_PAYMENT, payment)
  }
}

const mutations = {
  [SET_CART_MOVIE](state, movie) {
    state.cart.movie = movie
  },
  [SET_CART_DATE](state, date) {
    state.cart.date = date
  },
  [SET_CART_TIME](state, time) {
    state.cart.time = time
  },
  [SET_CART_TICKETS](state, tickets) {
    state.cart.tickets = tickets
  },
  [SET_CART_SEATS](state, seats) {
    state.cart.seats = seats
  },
  [SET_CART_PAYMENT](state, payment) {
    state.cart.payment = payment
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
