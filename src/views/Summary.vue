<template>
  <div class="container">
    <div class="box">
      <h1 class="title has-text-centered">Thank you for your purchase!</h1>
      <h2 class="subtitle has-text-centered">We hope you enjoy your movie!</h2>
      <div>
        <h3 class="has-text-weight-bold has-text-centered is-size-5">
          Order Summary
        </h3>
        <pre>
          {{ cart }}
        </pre>
      </div>
      <hr />
      <div class="field is-grouped is-grouped-centered mt-4">
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
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('cart')

export default {
  name: 'Summary',
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrices', 'calculatedTaxAmounts'])
  },
  methods: {
    ...mapActions(['resetCartState']),
    onClick() {
      this.resetCartState()
      this.$router.push('home')
    }
  }
}
</script>
