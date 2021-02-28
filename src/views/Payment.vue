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
import { createNamespacedHelpers } from 'vuex'
import PaymentMethods from '../components/PaymentMethods/PaymentMethods'
import PaymentSummary from '../components/PaymentSummary/PaymentSummary'
const { mapActions } = createNamespacedHelpers('cart')

export default {
  name: 'Payment',
  components: {
    PaymentMethods,
    PaymentSummary
  },
  methods: {
    ...mapActions(['setCartPayment']),
    onSubmit(card) {
      const { type, number, expiration, cvv } = card

      this.setCartPayment({
        type,
        number,
        expiration,
        cvv
      })

      this.$router.push('summary')
    }
  }
}
</script>
