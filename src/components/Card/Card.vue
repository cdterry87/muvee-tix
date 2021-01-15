<template>
  <router-link :to="link" class="card__container">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by5">
          <img v-bind="image" />
        </figure>
      </div>
      <div v-if="hasTitle" class="card-content has-text-centered">
        <h2 class="title is-size-5">{{ title }}</h2>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: {
      type: Number,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    image: {
      type: Object
    },
    title: {
      type: String,
      required: true
    },
    hasTitle: {
      type: Boolean,
      default: true
    }
  }
}
</script>
