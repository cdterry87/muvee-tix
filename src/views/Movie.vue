<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <Card v-bind="getMovieDetails(movie)" :has-title="false" />
        <div class="has-text-centered has-text-light is-size-7 my-4">
          Released {{ movie.release_date }}
        </div>
      </div>
      <div class="movie__details box column is-two-thirds has-text-centered">
        <div>
          <h2 class="title is-size-4">
            {{ movie.title }}
          </h2>
          <p>
            {{ movie.overview }}
          </p>
        </div>
        <hr />
        <MovieDateTimeSelection />
        <hr />
        <MovieTicketSelection />
      </div>
    </div>
  </div>
</template>

<script>
import { setMovieDetails } from '../utils/movies'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('cart')
const { mapGetters } = createNamespacedHelpers('movies')

import Card from '../components/Card/Card'
import MovieDateTimeSelection from '../components/MovieDateTimeSelection/MovieDateTimeSelection'
import MovieTicketSelection from '../components/MovieTicketSelection/MovieTicketSelection'

export default {
  name: 'Movie',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  components: {
    Card,
    MovieDateTimeSelection,
    MovieTicketSelection
  },
  data() {
    return {
      movie: {}
    }
  },
  created() {
    this.movie = { ...this.getMovie(this.id) }
    this.setCartMovie(this.id)
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['getMovie'])
  },
  methods: {
    ...mapActions(['setCartMovie']),
    getMovieDetails(movie) {
      return setMovieDetails(movie)
    }
  }
}
</script>
