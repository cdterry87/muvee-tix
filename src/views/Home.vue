<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="(movie, index) in movies" :key="index">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt="Poster"
        />
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.overview }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  created() {
    this.getMovies()
  },
  computed: {
    ...mapState(['movies'])
  },
  methods: {
    ...mapActions(['getMovies'])
  }
}
</script>
