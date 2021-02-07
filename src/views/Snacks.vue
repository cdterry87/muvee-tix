<template>
  <div class="container">
    <div class="box">
      <h2 class="title is-size-4 has-text-centered">Choose your snacks</h2>
      <p class="has-text-centered mb-5">
        By ordering now, you can pick up your snacks at the snack counter
        without waiting in line!
      </p>
      <SnackList />
      <div class="field is-grouped is-grouped-centered mt-4">
        <div class="control">
          <router-link to="/seats">
            <button class="button is-info">Previous</button>
          </router-link>
        </div>
        <div class="control">
          <router-link to="/payment">
            <button class="button is-info">Next</button>
          </router-link>
        </div>
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
