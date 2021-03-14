<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <PaymentMethods @paymentSubmit="onSubmit" />
      </div>
      <div class="column is-one-third">
        <PaymentSummary />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PaymentMethods from '../components/PaymentMethods/PaymentMethods'
import PaymentSummary from '../components/PaymentSummary/PaymentSummary'

export default {
  name: 'Payment',
  components: {
    PaymentMethods,
    PaymentSummary
  },
  computed: {
    ...mapGetters('cart', ['seats'])
  },
  methods: {
    ...mapActions('cart', ['setCartPayment']),
    ...mapActions('seats', ['setClaimedSeats']),
    onSubmit(card) {
      const { type, number, expiration, cvv } = card

      this.setCartPayment({
        type,
        number,
        expiration,
        cvv
      })

      const seats = Object.values(this.seats)
      this.setClaimedSeats(seats)

      this.$router.push('summary')
    }
  }
}
</script>
