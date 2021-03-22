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
                data-testid="input-adults"
                @change="onUpdate"
              />
            </div>
            <div class="control ml-2 ticket-price">
              <span class="tag is-info is-medium is-light">
                {{ prices.adults | currency }}
              </span>
            </div>
            <div class="control ticket-price">
              <span
                data-testid="adults-total"
                class="tag is-medium is-light"
                :class="{ 'is-success': adults > 0 }"
              >
                {{ totalPrices.adults | currency }}
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
                data-testid="input-kids"
                @change="onUpdate"
              />
            </div>
            <div class="control ml-2 ticket-price">
              <span class="tag is-info is-medium is-light">
                {{ prices.kids | currency }}
              </span>
            </div>
            <div class="control ticket-price">
              <span
                data-testid="kids-total"
                class="tag is-medium is-light"
                :class="{ 'is-success': kids > 0 }"
              >
                {{ totalPrices.kids | currency }}
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
                data-testid="input-seniors"
                @change="onUpdate"
              />
            </div>
            <div class="control ml-2 ticket-price">
              <span class="tag is-info is-medium is-light">
                {{ prices.seniors | currency }}
              </span>
            </div>
            <div class="control ticket-price">
              <span
                data-testid="seniors-total"
                class="tag is-medium is-light"
                :class="{ 'is-success': seniors > 0 }"
              >
                {{ totalPrices.seniors | currency }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <div
        v-if="totalPrices.total"
        data-testid="ticket-total"
        class="tag is-success is-large"
      >
        Your total: {{ totalPrices.total | currency }}
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
    ...mapGetters(['totalPrices'])
  },
  created() {
    this.setFieldsFromState()
  },
  watch: {
    adults: {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          const { tickets } = this.cart
          tickets.adults = newValue
          this.setCartTickets({
            ...tickets
          })
        }
      }
    },
    kids: {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          const { tickets } = this.cart
          tickets.kids = newValue
          this.setCartTickets({
            ...tickets
          })
        }
      }
    },
    seniors: {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          const { tickets } = this.cart
          tickets.seniors = newValue
          this.setCartTickets({
            ...tickets
          })
        }
      }
    }
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
      this.adults = Number(adults)
      this.kids = Number(kids)
      this.seniors = Number(seniors)
    }
  }
}
</script>
