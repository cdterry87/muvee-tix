import { SET_CLAIMED_SEATS } from './mutation-types'

export default {
  namespaced: true,
  state: {
    seats: {}
  },
  getters: {
    claimedSeats: (state, _, rootState) => {
      const { movie, date, time } = rootState.cart.cart

      if (
        !state.seats[movie.id] ||
        !state.seats[movie.id][date] ||
        !state.seats[movie.id][date][time]
      )
        return []

      return state.seats[movie.id][date][time]
    },
    totalClaimedSeats: (_, getters) => {
      return getters.claimedSeats.length
    }
  },
  actions: {
    setClaimedSeats({ commit, rootState }, seats) {
      const { movie, date, time } = rootState.cart.cart
      commit(SET_CLAIMED_SEATS, {
        id: movie.id,
        date,
        time,
        seats
      })
    }
  },
  mutations: {
    [SET_CLAIMED_SEATS](state, { id, date, time, seats }) {
      if (
        state.seats[id] &&
        state.seats[id][date] &&
        state.seats[id][date][time]
      ) {
        // If the movie/date/time selection already exists
        state.seats[id][date][time].push(...seats)
      } else if (state.seats[id] && state.seats[id][date]) {
        // If the movie/date selection already exists
        state.seats[id][date] = {
          ...state.seats[id][date],
          [time]: seats
        }
      } else if (state.seats[id]) {
        // If only the movie selection already exists
        state.seats[id] = {
          ...state.seats[id],
          [date]: {
            [time]: seats
          }
        }
      } else {
        // If the movie/date/time hasn't been added to state yet
        state.seats = {
          ...state.seats,
          [id]: {
            [date]: {
              [time]: seats
            }
          }
        }
      }
    }
  }
}
