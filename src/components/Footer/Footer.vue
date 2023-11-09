<template>
  <footer class="footer has-text-light has-text-centered mt-6 is-size-7">
    <div>
      <a
        class="has-text-white is-size-6"
        href="https://www.themoviedb.org"
        target="_blank"
      >
        <img :src="getTmdbImage()" style="height: 64px; width: auto" />
      </a>
    </div>
    <div class="mt-2 mb-4 has-text-white">
      Metadata provided by by
      <strong>
        <a href="https://www.themoviedb.org" target="_blank"> TMDB </a>
      </strong>
    </div>
    <a
      class="has-text-white is-size-6 mt-4"
      href="https://github.com/cdterry87/muvee-tix"
      target="_blank"
    >
      <i class="fab fa-github"></i>
      View Source on GitHub
    </a>
    <p class="mt-4">&copy; 2020 Muvee Tix</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    getTmdbImage() {
      return require(`../../assets/tmdb.png`)
    }
  }
}
</script>
