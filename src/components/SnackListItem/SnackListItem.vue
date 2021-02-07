<template>
  <div>{{ item.title }}</div>
</template>

<script>
export default {
  name: 'SnackListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
