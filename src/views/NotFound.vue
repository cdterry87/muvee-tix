<template>
  <div class="columns has-text-centered">
    <div class="column is-half is-offset-one-quarter">
      <div class="box">
        <i class="is-size-1 far fa-sad-tear mb-2"></i>
        <h2 class="title is-3">Page Not Found</h2>
        <p>
          Sorry, the page you are looking for could not be located. Click the
          button below to return home and try a new link.
        </p>
        <div class="field is-grouped is-grouped-centered mt-6">
          <div class="control">
            <router-link to="/" class="button is-link">
              Return to Home
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
