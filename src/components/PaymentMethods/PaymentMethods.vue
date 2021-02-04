<template>
  <div class="box">
    <form @submit.prevent="onSubmit">
      <h2 class="title is-size-4 has-text-centered">
        Enter your payment information
      </h2>
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <div class="field">
            <div class="control">
              <label
                class="radio has-text-weight-bold"
                v-for="(card, index) in cards"
                :key="`type${index}`"
              >
                <input type="radio" :value="card.value" v-model="type" />
                {{ card.label }}
              </label>
            </div>
          </div>
          <div class="columns is-multiline">
            <template v-for="field in fields">
              <div
                class="column"
                :class="column.class"
                v-for="(column, columnIndex) in field.columns"
                :key="`column.${columnIndex}`"
              >
                <div class="field">
                  <label class="label">{{ column.label }}</label>
                  <div
                    class="control"
                    :class="{ 'has-icons-left': column.icon }"
                  >
                    <component
                      :is="column.component"
                      v-bind="column.attributes"
                    />
                    <span v-if="column.icon" class="icon is-small is-left">
                      <i :class="column.icon"></i>
                    </span>
                  </div>
                  <p class="help is-danger"></p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <hr />
      <div class="field is-grouped is-grouped-centered mt-4">
        <div class="control">
          <router-link to="/seats">
            <button class="button is-info">Previous</button>
          </router-link>
        </div>
        <div class="control">
          <button type="submit" class="button is-success">
            Confirm Payment
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import cards from './cards'

export default {
  name: 'PaymentMethods',
  data() {
    return {
      type: 'visa'
    }
  },
  computed: {
    cards() {
      return cards
    },
    fields() {
      return cards[this.type]
    }
  },
  methods: {
    onSubmit() {
      //
    }
  }
}
</script>
