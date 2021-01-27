<template>
  <div class="container">
    <div class="box">
      <h2 class="title is-size-4 has-text-centered">Select your seats</h2>
      <div
        class="notification subtitle is-size-6 has-text-centered is-light"
        :class="{
          'is-success': seatsRemaining === 0,
          'is-danger': seatsRemaining < 0,
          'is-info': seatsRemaining > 0
        }"
      >
        {{ message }}
      </div>
      <SeatSelection :rows="6" :columns="10" @onSeatSelect="onSeatSelect" />
      <h4 class="title is-size-5 has-text-centered">FRONT OF THEATER</h4>
      <hr />
      <div class="field is-grouped is-grouped-centered mt-4">
        <div class="control">
          <router-link :to="`/movie/${movie}`">
            <button class="button is-info">Previous</button>
          </router-link>
        </div>
        <div class="control">
          <router-link to="/payment">
            <button
              class="button is-info"
              :disabled="totalSeats !== totalSeatsSelected"
            >
              Next
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeatSelection from '../components/SeatSelection/SeatSelection'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('cart')

export default {
  name: 'Seats',
  components: {
    SeatSelection
  },
  computed: {
    ...mapGetters(['movie', 'totalSeats', 'totalSeatsSelected']),
    seatsRemaining() {
      return this.totalSeats - this.totalSeatsSelected
    },
    message() {
      if (this.seatsRemaining === 0) {
        return 'You have selected all of your available seats. Please continue to the next step.'
      } else if (this.seatsRemaining < 0) {
        return 'You have selected too many seats. You must adjust your selection before continuing to the next step.'
      } else {
        return `You have ${this.seatsRemaining} seats remaining.`
      }
    }
  },
  methods: {
    ...mapActions(['setCartSeats']),
    onSeatSelect(seats) {
      this.setCartSeats(seats)
    }
  }
}
</script>
