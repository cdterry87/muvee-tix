<template>
  <div>
    <div v-for="(category, index) in snacks" :key="index">
      <h1 class="title is-4">{{ category.title }}</h1>
      <SnackListItem
        v-for="(item, itemIndex) in category.items"
        :key="itemIndex"
        :item="item"
      />
      <hr />
    </div>
  </div>
</template>

<script>
import snacks from './snacks.json'

import SnackListItem from '../SnackListItem/SnackListItem'

export default {
  name: 'SnackList',
  components: {
    SnackListItem
  },
  data() {
    return {
      snacks
    }
  }
}
</script>
