<template>
  <div class="box">
    <h3 class="title is-size-4 has-text-centered">Summary</h3>
    <h4 class="movie__title has-text-weight-bold has-text-centered">
      {{ cart.movie.title }}
    </h4>
    <Card v-bind="getMovieDetails(cart.movie)" :has-title="false" />
    <table class="mt-4 table is-narrow is-fullwidth is-size-7">
      <tr v-if="cart.tickets.adults">
        <td>Adults</td>
        <td>{{ cart.tickets.adults }}</td>
        <td data-testid="total-price-adults">
          {{ totalPrices.adults | currency }}
        </td>
      </tr>
      <tr v-if="cart.tickets.kids">
        <td>Kids</td>
        <td>{{ cart.tickets.kids }}</td>
        <td data-testid="total-price-kids">
          {{ totalPrices.kids | currency }}
        </td>
      </tr>
      <tr v-if="cart.tickets.seniors">
        <td>Seniors</td>
        <td>{{ cart.tickets.seniors }}</td>
        <td data-testid="total-price-seniors">
          {{ totalPrices.seniors | currency }}
        </td>
      </tr>
      <tr v-if="totalSnacks">
        <td>Snacks</td>
        <td>{{ totalSnacks }}</td>
        <td data-testid="total-price-snacks">
          {{ totalPrices.snacks | currency }}
        </td>
      </tr>
      <tr v-if="calculatedTaxAmounts.calculatedTax">
        <td colspan="2">Taxes:</td>
        <td data-testid="taxes">
          {{ calculatedTaxAmounts.calculatedTax | currency }}
        </td>
      </tr>
      <tr class="has-text-weight-bold">
        <td colspan="2">Total:</td>
        <td data-testid="total">
          {{ calculatedTaxAmounts.totalWithTax | currency }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Card from '../Card/Card'
import { setMovieDetails } from '../../utils/movies'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('cart')

export default {
  name: 'PaymentSummary',
  components: {
    Card
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrices', 'totalSnacks', 'calculatedTaxAmounts'])
  },
  created() {
    this.getTaxes()
  },
  methods: {
    ...mapActions(['getTaxes']),
    getMovieDetails(movie) {
      return setMovieDetails(movie)
    }
  }
}
</script>
