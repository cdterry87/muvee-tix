<template>
  <div>
    <h1>Movie</h1>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('movies')

export default {
  name: 'Movie',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
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
  }
}
</script>
