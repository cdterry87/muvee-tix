<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <figure class="image is-64x64">
          <img :src="getImage(image)" :alt="title" />
        </figure>
      </div>
      <div class="level-item">
        <label class="label" :for="name">{{ title }}</label>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <input
          type="number"
          class="input"
          size="2"
          min="0"
          max="99"
          :id="name"
          :name="name"
          v-model="item"
        />
      </div>
      <div class="level-item">
        <button class="is-success button" :disabled="item <= 0">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnackListItem',
  props: {
    title: {
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
      item: 0
    }
  },
  methods: {
    getImage(image) {
      return require(`../../assets/${image}`)
    }
  }
}
</script>
