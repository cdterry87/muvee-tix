<template>
  <div class="my-3">
    <h3 class="subtitle is-size-6">Select a date and time:</h3>
    <div class="field">
      <div class="control">
        <div class="select">
          <select name="date">
            <option
              v-for="(date, index) in dates"
              :key="index"
              :value="date.value"
            >
              {{ date.text }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <div class="select">
          <select name="time">
            <option
              v-for="(time, index) in times"
              :key="index"
              :value="time.value"
            >
              {{ time.text }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { add, format } from 'date-fns'

export default {
  name: 'MovieDateTimeSelection',
  computed: {
    dates() {
      const dates = []
      for (let i = 0; i < 7; i++) {
        const date = add(new Date(), { days: i })

        dates.push({
          value: format(date, 'yyyy-MM-dd'),
          text: format(date, 'EEEE, LLLL do')
        })
      }
      return dates
    },
    times() {
      return [
        {
          value: '05:00',
          text: '5:00pm'
        },
        {
          value: '06:30',
          text: '6:30pm'
        },
        {
          value: '08:00',
          text: '8:00pm'
        },
        {
          value: '09:30',
          text: '09:30pm'
        },
        {
          value: '11:00',
          text: '11:00pm'
        }
      ]
    }
  }
}
</script>
