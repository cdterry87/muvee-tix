<template>
  <div class="container">
    <SnackList />
    <div class="field is-grouped is-grouped-centered mt-4">
      <div class="control">
        <router-link to="/seats">
          <button data-testid="prev-button" class="button is-info">
            Previous
          </button>
        </router-link>
      </div>
      <div class="control">
        <router-link to="/payment">
          <button data-testid="next-button" class="button is-info">Next</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SnackList from '../components/SnackList/SnackList'

export default {
  name: 'Snacks',
  components: {
    SnackList
  }
}
</script>
