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
              />
            </div>
            <div class="control ml-2 ticket-price">
              <span class="tag is-info is-medium is-light">
                ${{ adultPrice }}
              </span>
            </div>
            <div class="control ticket-price">
              <span class="tag is-success is-medium is-light">
                ${{ adultTotal }}
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
              />
            </div>
            <div class="control ml-2 ticket-price">
              <span class="tag is-info is-medium is-light">
                ${{ kidPrice }}
              </span>
            </div>
            <div class="control ticket-price">
              <span class="tag is-success is-medium is-light">
                ${{ kidTotal }}
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
              />
            </div>
            <div class="control ml-2 ticket-price">
              <span class="tag is-info is-medium is-light">
                ${{ seniorPrice }}
              </span>
            </div>
            <div class="control ticket-price">
              <span class="tag is-success is-medium is-light">
                ${{ seniorTotal }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <div class="tag is-success is-large">Your total: ${{ total }}</div>
      <div class="field is-grouped is-grouped-centered mt-4">
        <div class="control">
          <router-link to="/seats">
            <button class="button is-info" :disabled="total === 0">Next</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieTicketSelection',
  data() {
    return {
      adults: 0,
      kids: 0,
      seniors: 0,
      adultPrice: 14,
      kidPrice: 10,
      seniorPrice: 12
    }
  },
  computed: {
    adultTotal() {
      return this.adults * this.adultPrice
    },
    kidTotal() {
      return this.kids * this.kidPrice
    },
    seniorTotal() {
      return this.seniors * this.seniorPrice
    },
    total() {
      return this.adultTotal + this.kidTotal + this.seniorTotal
    }
  }
}
</script>
