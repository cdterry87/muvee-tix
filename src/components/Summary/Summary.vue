<template>
  <div class="box">
    <h3 class="title is-size-4 has-text-centered">Summary</h3>
    <h4 class="has-text-weight-bold has-text-centered">
      {{ cart.movie.title }}
    </h4>
    <Card v-bind="getMovieDetails(cart.movie)" :has-title="false" />
    <table class="mt-4 table is-narrow is-fullwidth">
      <tr>
        <th colspan="2">Tickets</th>
        <th>Total</th>
      </tr>
      <tr v-if="cart.tickets.adults">
        <td>Adults</td>
        <td>{{ cart.tickets.adults }}</td>
        <td>${{ totalPrices.adults }}</td>
      </tr>
      <tr v-if="cart.tickets.kids">
        <td>Kids</td>
        <td>{{ cart.tickets.kids }}</td>
        <td>${{ totalPrices.kids }}</td>
      </tr>
      <tr v-if="cart.tickets.seniors">
        <td>Seniors</td>
        <td>{{ cart.tickets.seniors }}</td>
        <td>${{ totalPrices.seniors }}</td>
      </tr>
      <tr v-if="calculatedTaxAmounts.calculatedTax">
        <td colspan="2">Taxes:</td>
        <td>${{ calculatedTaxAmounts.calculatedTax }}</td>
      </tr>
      <tr>
        <td class="has-text-weight-bold" colspan="2">Total:</td>
        <td>${{ calculatedTaxAmounts.totalWithTax }}</td>
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
  name: 'Summary',
  components: {
    Card
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrices', 'calculatedTaxAmounts'])
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
