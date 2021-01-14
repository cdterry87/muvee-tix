import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import movies from './movies'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    movies
  },
  plugins: [createPersistedState()]
})
