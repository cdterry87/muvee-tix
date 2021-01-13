<template>
  <div class="card">
    <div class="card__image-container">
      <img v-bind="image" class="card__image" />
    </div>
    <h2 class="card__title">
      {{ title }}
    </h2>
    <div class="card__details">
      <span>Released: {{ release_date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: {
      type: Object
    },
    title: {
      type: String,
      required: true
    },
    release_date: {
      type: String,
      default: 'N/A'
    }
  }
}
</script>
