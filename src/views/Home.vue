<template>
  <div>
    <h1>Movies</h1>
    <div class="flex">
      <div v-for="(movie, index) in movies" :key="index">
        <Card v-bind="getMovieDetails(movie)" />
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
      const { title, release_date, poster_path } = movie
      return {
        title,
        image: {
          src: `https://image.tmdb.org/t/p/w500/${poster_path}`,
          alt: `Movie Poster for ${title}`
        },
        release_date
      }
    }
  }
}
</script>
