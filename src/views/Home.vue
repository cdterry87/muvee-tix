<template>
  <div>
    <div class="container">
      <div class="columns is-multiline">
        <div
          v-for="(movie, index) in movies"
          :key="index"
          class="column is-one-quarter"
        >
          <Card v-bind="getMovieDetails(movie)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('movies')

import Card from '../components/Card/Card'

export default {
  name: 'Home',
  components: {
    Card
  },
  created() {
    this.getMovies()
  },
  computed: {
    ...mapState(['movies'])
  },
  methods: {
    ...mapActions(['getMovies']),
    getMovieDetails(movie) {
      const { id, title, poster_path } = movie
      const link = `/movie/${id}`
      return {
        id,
        link,
        title,
        image: {
          src: `https://image.tmdb.org/t/p/w500/${poster_path}`,
          alt: `Movie Poster for ${title}`
        }
      }
    }
  }
}
</script>
