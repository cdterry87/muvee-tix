<template>
  <div>
    <div>
      <h3 class="subtitle is-size-6">Choose your tickets:</h3>
      <div class="ticket-selection field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Adults:</label>
        </div>
        <div class="field-body">
          <div class="field has-addons ticket-prices">
            <div class="control">
              <input
                class="input"
                type="number"
                v-model="adults"
                size="2"
                min="0"
                max="99"
                @change="onUpdate"
              />
            </div>
            <div class="control ml-2 ticket-price">
              <span class="tag is-info is-medium is-light">
                ${{ prices.adults }}
              </span>
            </div>
            <div class="control ticket-price">
              <span
                class="tag is-medium is-light"
                :class="{ 'is-success': adults > 0 }"
              >
                ${{ totalTicketPrices.adults }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Kids:</label>
        </div>
        <div class="field-body">
          <div class="field has-addons ticket-prices">
            <div class="control">
              <input
                class="input"
                type="number"
                v-model="kids"
                size="2"
                min="0"
                max="99"
                @change="onUpdate"
              />
            </div>
            <div class="control ml-2 ticket-price">
              <span class="tag is-info is-medium is-light">
                ${{ prices.kids }}
              </span>
            </div>
            <div class="control ticket-price">
              <span
                class="tag is-medium is-light"
                :class="{ 'is-success': kids > 0 }"
              >
                ${{ totalTicketPrices.kids }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Seniors:</label>
        </div>
        <div class="field-body">
          <div class="field has-addons ticket-prices">
            <div class="control">
              <input
                class="input"
                type="number"
                v-model="seniors"
                size="2"
                min="0"
                max="99"
                @change="onUpdate"
              />
            </div>
            <div class="control ml-2 ticket-price">
              <span class="tag is-info is-medium is-light">
                ${{ prices.seniors }}
              </span>
            </div>
            <div class="control ticket-price">
              <span
                class="tag is-medium is-light"
                :class="{ 'is-success': seniors > 0 }"
              >
                ${{ totalTicketPrices.seniors }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <div v-if="totalTicketPrices.total" class="tag is-success is-large">
        Your total: ${{ totalTicketPrices.total }}
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('cart')

export default {
  name: 'MovieTicketSelection',
  data() {
    return {
      adults: 0,
      kids: 0,
      seniors: 0
    }
  },
  computed: {
    ...mapState(['prices', 'cart']),
    ...mapGetters(['totalTicketPrices'])
  },
  mounted() {
    this.setFieldsFromState()
  },
  methods: {
    ...mapActions(['setCartTickets']),
    onUpdate() {
      this.setCartTickets({
        adults: this.adults,
        kids: this.kids,
        seniors: this.seniors
      })
    },
    setFieldsFromState() {
      const { adults, kids, seniors } = this.cart.tickets
      this.adults = adults
      this.kids = kids
      this.seniors = seniors
    }
  }
}
</script>
