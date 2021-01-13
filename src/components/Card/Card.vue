<template>
  <a :href="link" class="card__container">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by5">
          <img v-bind="image" />
        </figure>
      </div>
      <div class="card-content has-text-centered">
        <h2 class="title is-5">{{ title }}</h2>
      </div>
    </div>
  </a>
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
    }
  }
}
</script>
