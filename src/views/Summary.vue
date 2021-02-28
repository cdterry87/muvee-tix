<template>
  <div class="container">
    <div class="box">
      <h1 class="title has-text-centered">Thank you for your purchase!</h1>
      <h2 class="subtitle has-text-centered">We hope you enjoy your movie!</h2>
      <h3 class="has-text-weight-bold has-text-centered is-size-4">
        Order Summary
      </h3>
      <hr />
      <div class="order-summary">
        <h4 class="has-text-weight-bold is-size-5 has-text-centered">
          {{ cart.movie.title }}
        </h4>
        <p class="my-3 has-text-centered">{{ cart.movie.overview }}</p>
        <div class="columns">
          <div class="column is-one-third">
            <Card v-bind="getMovieDetails(cart.movie)" :has-title="false" />
          </div>
          <div class="column is-two-thirds">
            <table class="mt-4 table is-fullwidth is-size-6">
              <tr>
                <th></th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              <tr v-if="cart.tickets.adults">
                <td>Adult Tickets</td>
                <td>{{ cart.tickets.adults }}</td>
                <td data-testid="total-price-adults">
                  ${{ totalPrices.adults }}
                </td>
              </tr>
              <tr v-if="cart.tickets.kids">
                <td>Kid Tickets</td>
                <td>{{ cart.tickets.kids }}</td>
                <td data-testid="total-price-kids">${{ totalPrices.kids }}</td>
              </tr>
              <tr v-if="cart.tickets.seniors">
                <td>Senior Tickets</td>
                <td>{{ cart.tickets.seniors }}</td>
                <td data-testid="total-price-seniors">
                  ${{ totalPrices.seniors }}
                </td>
              </tr>
              <tr v-for="(snack, index) in cart.snacks" :key="index">
                <td>{{ snack.label }}</td>
                <td>{{ snack.quantity }}</td>
                <td>${{ snack.price }}</td>
              </tr>
              <tr v-if="calculatedTaxAmounts.calculatedTax">
                <td colspan="2">Taxes:</td>
                <td data-testid="taxes">
                  ${{ calculatedTaxAmounts.calculatedTax }}
                </td>
              </tr>
              <tr class="has-text-weight-bold">
                <td colspan="2">Your Total:</td>
                <td data-testid="total">
                  ${{ calculatedTaxAmounts.totalWithTax }}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="field is-grouped is-grouped-centered mt-6">
        <div class="control">
          <button
            data-testid="prev-button"
            class="button is-success"
            @click="onClick"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card/Card'
import { setMovieDetails } from '../utils/movies'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('cart')

export default {
  name: 'Summary',
  components: {
    Card
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrices', 'calculatedTaxAmounts'])
  },
  methods: {
    ...mapActions(['resetCartState']),
    onClick() {
      this.resetCartState()
      this.$router.push('/')
    },
    getMovieDetails(movie) {
      return setMovieDetails(movie)
    }
  }
}
</script>
