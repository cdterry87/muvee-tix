<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <SnackList />
      </div>
      <div class="column is-one-third">
        <SnackListSummary />
      </div>
    </div>
  </div>
</template>

<script>
import SnackList from '../components/SnackList/SnackList'
import SnackListSummary from '../components/SnackListSummary/SnackListSummary'

export default {
  name: 'Snacks',
  components: {
    SnackList,
    SnackListSummary
  }
}
</script>
