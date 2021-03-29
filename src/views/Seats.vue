<template>
  <div class="container">
    <div class="box">
      <h2 class="title is-size-4 has-text-centered">Select your seats</h2>
      <div
        class="mt-2 notification subtitle is-size-6 has-text-centered is-light"
        :class="{
          'is-success': seatsRemaining === 0,
          'is-danger': seatsRemaining < 0 || this.isOverCapacity,
          'is-info': seatsRemaining > 0
        }"
      >
        {{ message }}
      </div>
      <SeatSelection
        :rows="seatRows"
        :columns="seatColumns"
        @onSeatSelect="onSeatSelect"
      />
      <h4 class="title is-size-5 has-text-centered">FRONT OF THEATER</h4>
      <hr />
      <div class="field is-grouped is-grouped-centered mt-4">
        <div class="control">
          <router-link :to="`/movie/${movie.id}`">
            <button class="button is-info" data-testid="prev-button">
              Previous
            </button>
          </router-link>
        </div>
        <div class="control">
          <router-link to="/snacks">
            <button
              class="button is-info"
              data-testid="next-button"
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
import { mapGetters, createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('cart')

export default {
  name: 'Seats',
  components: {
    SeatSelection
  },
  data() {
    return {
      seatRows: 6,
      seatColumns: 10
    }
  },
  computed: {
    ...mapGetters('cart', ['movie', 'totalSeats', 'totalSeatsSelected']),
    ...mapGetters('seats', ['totalClaimedSeats']),
    seatsRemaining() {
      return this.totalSeats - this.totalSeatsSelected
    },
    totalAvailableSeats() {
      return this.seatColumns * this.seatRows
    },
    isOverCapacity() {
      if (
        this.seatsRemaining - this.totalClaimedSeats >
        this.totalAvailableSeats
      ) {
        return true
      }
      return false
    },
    message() {
      if (this.isOverCapacity) {
        return 'This theater is over capacity. Please adjust the number of tickets on your order.'
      } else {
        if (this.seatsRemaining === 0) {
          return 'You have selected all of your available seats. Please continue to the next step.'
        } else if (this.seatsRemaining < 0) {
          return 'You have selected too many seats. You must adjust your selection before continuing to the next step.'
        } else {
          return `You have ${this.seatsRemaining} seats remaining.`
        }
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
