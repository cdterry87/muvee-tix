<template>
  <div class="box">
    <h2 class="title is-size-4 has-text-centered">Choose your snacks</h2>
    <p class="has-text-centered mb-5">
      Order now and you can pick up your snacks at the snack counter without
      waiting in line!
    </p>
    <hr />
    <div v-for="(category, index) in snacks" :key="index">
      <h1 class="title is-4">{{ category.title }}</h1>
      <SnackListItem
        v-for="(item, itemIndex) in category.items"
        :key="itemIndex"
        v-bind="item"
        @onSnackListItemChange="onSnackListItemChange"
      />
      <hr />
    </div>
    <div class="has-text-centered">
      <div class="tag is-success is-large">Your total:</div>
    </div>
    <div class="field is-grouped is-grouped-centered mt-4">
      <div class="control">
        <router-link to="/seats">
          <button class="button is-info">Previous</button>
        </router-link>
      </div>
      <div class="control">
        <router-link to="/payment">
          <button class="button is-info">Next</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import snacks from './snacks.json'
import SnackListItem from '../SnackListItem/SnackListItem'

const { mapActions } = createNamespacedHelpers('cart')

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
  methods: {
    ...mapActions(['setCartSnacks']),
    onSnackListItemChange(item) {
      this.addedSnacks[item.name] = item.quantity

      this.setCartSnacks(this.addedSnacks)
    }
  }
}
</script>
