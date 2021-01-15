<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <Card v-bind="getMovieDetails(movie)" :has-title="false" />
        <div class="has-text-centered has-text-light is-size-7 my-4">
          Released {{ movie.release_date }}
        </div>
      </div>
      <div class="box column is-two-thirds has-text-centered">
        <h2 class="title is-size-4">
          {{ movie.title }}
        </h2>
        <p>
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { setMovieDetails } from '../utils/movies'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('movies')

import Card from '../components/Card/Card'

export default {
  name: 'Movie',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  components: {
    Card
  },
  data() {
    return {
      movie: {}
    }
  },
  created() {
    this.movie = { ...this.getMovie(this.id) }
  },
  computed: {
    ...mapGetters(['getMovie'])
  },
  methods: {
    getMovieDetails(movie) {
      return setMovieDetails(movie)
    }
  }
}
</script>
