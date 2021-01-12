import { movieService } from '../services/movies'
import { GET_MOVIES } from './mutation-types'

export default {
  namespaced: true,
  state: {
    movies: []
  },
  mutations: {
    [GET_MOVIES](state, movies) {
      state.movies = movies
    }
  },
  actions: {
    async getMovies({ commit }) {
      const movies = await movieService.getMovies()
      commit(GET_MOVIES, movies)
    }
  },
  getters: {
    getMovie: state => id => state.movies.find(movie => movie.id === id)
  }
}
