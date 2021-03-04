<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <figure class="image is-64x64">
          <img data-testid="image" :src="getImage(image)" :alt="label" />
        </figure>
      </div>
      <div class="level-item">
        <label data-testid="label" class="label" :for="name">
          {{ label }}
        </label>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <label data-testid="price" class="label" :for="name">
          {{ price | currency }} x
        </label>
      </div>
      <div class="level-item">
        <input
          type="number"
          class="input"
          size="2"
          min="0"
          max="99"
          :id="quantity"
          :name="quantity"
          v-model="quantity"
          data-testid="quantity"
          @change="onChange"
        />
      </div>
      <div class="level-item">
        <span
          data-testid="total"
          class="tag is-medium is-light"
          :class="{ 'is-success': quantity > 0 }"
        >
          {{ total | currency }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('cart')

export default {
  name: 'SnackListItem',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    ...mapGetters(['snacks']),
    quantityProxy() {
      if (!this.snacks) return
      return this.snacks[this.name]?.quantity || 0
    },
    total() {
      return (this.quantity * this.price).toFixed(2)
    }
  },
  watch: {
    quantityProxy: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) this.quantity = newValue
      }
    }
  },
  methods: {
    getImage(image) {
      return require(`../../assets/${image}`)
    },
    onChange() {
      this.$emit('onSnackListItemChange', {
        name: this.name,
        label: this.label,
        quantity: this.quantity,
        price: this.price
      })
    }
  }
}
</script>
