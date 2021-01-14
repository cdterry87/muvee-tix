<template>
  <div>
    <div class="container">
      <div class="columns is-multiline">
        <div
          v-for="(movie, index) in movies"
          :key="index"
          class="column is-one-quarter-desktop is-half-tablet is-full-mobile"
        >
          <Card v-bind="getMovieDetails(movie)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('movies')

import Card from '../components/Card/Card'

export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapState(['movies'])
  },
  methods: {
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
