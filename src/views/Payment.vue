<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <PaymentMethods />
      </div>
      <div class="column is-one-third">
        <Summary />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import PaymentMethods from '../components/PaymentMethods/PaymentMethods'
import Summary from '../components/Summary/Summary'
const { mapActions } = createNamespacedHelpers('cart')

export default {
  name: 'Payment',
  components: {
    PaymentMethods,
    Summary
  },
  methods: {
    ...mapActions([''])
  }
}
</script>
