<template>
  <div class="container">
    <div class="box">
      <h1 data-testid="thank-you" class="title has-text-centered">
        Thank you for your purchase!
      </h1>
      <h2 data-testid="thank-you-message" class="subtitle has-text-centered">
        We hope you enjoy your movie!
      </h2>
      <hr />
      <div class="order-summary">
        <div class="columns">
          <div class="column is-one-third">
            <Card v-bind="getMovieDetails(cart.movie)" :has-title="false" />
          </div>
          <div class="column is-two-thirds">
            <h3
              data-testid="movie-title"
              class="has-text-weight-bold is-size-5 has-text-centered"
            >
              {{ cart.movie.title }}
            </h3>
            <table
              data-testid="order-summary"
              class="mt-4 table is-fullwidth is-size-6"
            >
              <tr>
                <th>Order Summary</th>
                <th>Quantity</th>
                <th class="has-text-right">Total</th>
              </tr>
              <tr v-if="cart.tickets.adults">
                <td>Adult Tickets</td>
                <td>{{ cart.tickets.adults }}</td>
                <td data-testid="total-price-adults" class="has-text-right">
                  {{ totalPrices.adults | currency }}
                </td>
              </tr>
              <tr v-if="cart.tickets.kids">
                <td>Kid Tickets</td>
                <td>{{ cart.tickets.kids }}</td>
                <td data-testid="total-price-kids" class="has-text-right">
                  {{ totalPrices.kids | currency }}
                </td>
              </tr>
              <tr v-if="cart.tickets.seniors">
                <td>Senior Tickets</td>
                <td>{{ cart.tickets.seniors }}</td>
                <td data-testid="total-price-seniors" class="has-text-right">
                  {{ totalPrices.seniors | currency }}
                </td>
              </tr>
              <tr
                data-testid="snack-item"
                v-for="(snack, index) in cart.snacks"
                :key="index"
              >
                <td>{{ snack.label }}</td>
                <td>{{ snack.quantity }}</td>
                <td class="has-text-right">
                  {{ snack.price | currency }}
                </td>
              </tr>
              <tr v-if="calculatedTaxAmounts.calculatedTax">
                <td colspan="2">Taxes:</td>
                <td data-testid="taxes" class="has-text-right">
                  {{ calculatedTaxAmounts.calculatedTax | currency }}
                </td>
              </tr>
              <tr class="has-text-weight-bold">
                <td colspan="2">Your Total:</td>
                <td data-testid="total" class="has-text-right">
                  {{ calculatedTaxAmounts.totalWithTax | currency }}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="field is-grouped is-grouped-centered mt-6">
        <div class="control">
          <button
            data-testid="home-button"
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
