<template>
  <div class="container">
    <div class="columns is-multiline">
      <div
        v-for="(movie, index) in movies"
        :key="index"
        class="column is-one-third-desktop is-half-tablet is-full-mobile"
      >
        <Card v-bind="getMovieDetails(movie)" />
      </div>
    </div>
  </div>
</template>

<script>
import { setMovieDetails } from '../utils/movies'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('movies')
const { mapActions } = createNamespacedHelpers('cart')

import Card from '../components/Card/Card'

export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapState(['movies'])
  },
  mounted() {
    this.resetCartState()
  },
  methods: {
    ...mapActions(['resetCartState']),
    getMovieDetails(movie) {
      return setMovieDetails(movie)
    }
  }
}
</script>
