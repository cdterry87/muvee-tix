import { cartService } from '../services/cart'

import {
  SET_CART_MOVIE,
  SET_CART_DATE,
  SET_CART_TIME,
  SET_CART_TICKETS,
  SET_CART_SEATS,
  SET_CART_SNACKS,
  SET_CART_PAYMENT,
  RESET_CART_STATE,
  GET_TAXES
} from './mutation-types'

const getDefaultState = () => {
  return {
    cart: {
      movie: {},
      date: '',
      time: '',
      tickets: {
        adults: 0,
        kids: 0,
        seniors: 0
      },
      seats: [],
      snacks: {},
      payment: {
        type: '',
        card: '',
        expiration: '',
        cvv: ''
      },
      taxes: ''
    },
    prices: {
      adults: 14,
      kids: 10,
      seniors: 12
    }
  }
}

const state = getDefaultState()

const getters = {
  movie: state => state.cart.movie,
  date: state => state.cart.date,
  time: state => state.cart.time,
  tickets: state => state.cart.tickets,
  seats: state => state.cart.seats,
  snacks: state => state.cart.snacks,
  payment: state => state.cart.payment,
  totalTicketPrices: state => {
    const adultTotalPrice = state.cart.tickets.adults * state.prices.adults
    const kidTotalPrice = state.cart.tickets.kids * state.prices.kids
    const seniorTotalPrice = state.cart.tickets.seniors * state.prices.seniors

    return {
      adults: adultTotalPrice,
      kids: kidTotalPrice,
      seniors: seniorTotalPrice,
      total: adultTotalPrice + kidTotalPrice + seniorTotalPrice
    }
  },
  totalSeats: state => {
    const { adults, kids, seniors } = state.cart.tickets
    return parseInt(adults) + parseInt(kids) + parseInt(seniors)
  },
  totalSeatsSelected: state => {
    return state.cart.seats.length
  },
  totalSnackPrices: state => {
    let total = 0
    Object.values(state.cart.snacks).forEach(snack => {
      total = total + snack.price * snack.quantity
    })
    return total
  },
  calculatedTaxAmounts: (state, getters) => {
    return {
      calculatedTax: (
        state.cart.taxes * getters.totalTicketPrices.total
      ).toFixed(2),
      totalWithTax: (
        state.cart.taxes * getters.totalTicketPrices.total +
        getters.totalTicketPrices.total
      ).toFixed(2)
    }
  }
}

const actions = {
  resetCartState({ commit }) {
    commit(RESET_CART_STATE)
  },
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
  setCartSnacks({ commit }, snacks) {
    commit(SET_CART_SNACKS, snacks)
  },
  setCartPayment({ commit }, payment) {
    commit(SET_CART_PAYMENT, payment)
  },
  getTaxes({ commit }) {
    const taxes = cartService.getTaxes()
    commit(GET_TAXES, taxes)
  }
}

const mutations = {
  [RESET_CART_STATE](state) {
    Object.assign(state, getDefaultState())
  },
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
  [SET_CART_SNACKS](state, snacks) {
    state.cart.snacks = { ...snacks }
  },
  [SET_CART_PAYMENT](state, payment) {
    state.cart.payment = payment
  },
  [GET_TAXES](state, taxes) {
    state.cart.taxes = taxes
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
