<template>
  <div>
    <h2 class="title is-size-4 has-text-centered">Choose your snacks</h2>
    <p class="has-text-centered mb-5">
      Order now and you can pick up your snacks at the snack counter without
      waiting in line!
    </p>
    <hr />
    <div v-for="(category, index) in snacks" :key="index">
      <h3 class="subtitle has-text-weight-bold is-4">{{ category.title }}</h3>
      <SnackListItem
        v-for="(item, itemIndex) in category.items"
        :key="itemIndex"
        v-bind="item"
        @onSnackListItemChange="onSnackListItemChange"
      />
      <hr />
    </div>
    <div v-if="totalSnackPrices" class="has-text-centered">
      <div data-testid="snack-list-total" class="tag is-success is-large">
        Your total: ${{ totalSnackPrices }}
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import snacks from './snacks.json'
import SnackListItem from '../SnackListItem/SnackListItem'

const { mapActions, mapState, mapGetters } = createNamespacedHelpers('cart')

export default {
  name: 'SnackList',
  components: {
    SnackListItem
  },
  data() {
    return {
      snacks,
      addedSnacks: {}
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalSnackPrices'])
  },
  mounted() {
    this.setSnacksFromState()
  },
  methods: {
    ...mapActions(['setCartSnacks']),
    onSnackListItemChange(item) {
      this.addedSnacks[item.name] = {
        quantity: item.quantity,
        price: item.price
      }

      this.setCartSnacks(this.addedSnacks)
    },
    setSnacksFromState() {
      if (!this.cart.snacks) return
      this.addedSnacks = this.cart.snacks
    }
  }
}
</script>
