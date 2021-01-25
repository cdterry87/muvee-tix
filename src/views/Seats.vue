<template>
  <div class="container">
    <div class="box">
      <h2 class="title is-size-4 has-text-centered">Select your seats</h2>
      <h3 class="subtitle is-size-6 has-text-centered">
        You have X seats remaining
      </h3>
      <SeatsGrid :rows="6" :columns="10" />
      <h4 class="title is-size-5 has-text-centered">FRONT OF THEATER</h4>
      <hr />
      <div class="field is-grouped is-grouped-centered mt-4">
        <div class="control">
          <router-link to="/movie">
            <button class="button is-info">Previous</button>
          </router-link>
        </div>
        <div class="control">
          <router-link to="/payment">
            <button class="button is-info">Next</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeatsGrid from '../components/SeatsGrid/SeatsGrid'

export default {
  name: 'Seats',
  components: {
    SeatsGrid
  }
}
</script>
