<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('movies')

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  created() {
    this.getMovies()
  },
  methods: {
    ...mapActions(['getMovies'])
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
