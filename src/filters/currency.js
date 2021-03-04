import Vue from 'vue'

Vue.filter('currency', value => {
  if (!value || isNaN(value)) return value
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
})
