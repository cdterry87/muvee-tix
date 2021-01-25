import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import cart from './cart'
import movies from './movies'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    cart,
    movies
  },
  plugins: [createPersistedState()]
})
