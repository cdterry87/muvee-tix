<template>
  <div class="box">
    <h2 class="title is-size-4 has-text-centered">
      Enter your payment information
    </h2>
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="field">
          <div class="control">
            <label class="radio has-text-weight-bold">
              <input type="radio" name="type" value="V" />
              Visa
            </label>
            <label class="radio has-text-weight-bold">
              <input type="radio" name="type" value="MC" />
              MasterCard
            </label>
            <label class="radio has-text-weight-bold">
              <input type="radio" name="type" value="AE" />
              American Express
            </label>
          </div>
        </div>
        <div class="field">
          <label class="label">Card Number</label>
          <div class="control has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="0000 0000 0000 0000"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-credit-card"></i>
            </span>
          </div>
          <p class="help is-danger"></p>
        </div>
        <div class="columns">
          <div class="column is-half">
            <div class="field">
              <label class="label">Expiration Date</label>
              <div class="control">
                <input class="input" type="text" placeholder="MM/YY" />
              </div>
              <p class="help is-danger"></p>
            </div>
          </div>
          <div class="column is-half">
            <div class="field">
              <label class="label">CVV</label>
              <div class="control">
                <input class="input" type="text" placeholder="000" />
              </div>
              <p class="help is-danger"></p>
            </div>
          </div>
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
        <button class="button is-success">Confirm Payment</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentMethods'
}
</script>
