import Vue from 'vue'
import Vuex from 'vuex'

import { getMoviesService } from '../services/movies'
import { GET_MOVIES } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    [GET_MOVIES](state, movies) {
      state.movies = movies
    },
  },
  actions: {
    async getMovies({ commit }) {
      const movies = await getMoviesService()
      commit(GET_MOVIES, movies)
    },
  },
  getters: {
    getMovie: state => id => state.movies.find(movie => movie.id === id),
  },
})
