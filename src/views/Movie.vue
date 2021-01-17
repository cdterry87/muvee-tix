<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <Card v-bind="getMovieDetails(movie)" :has-title="false" />
        <div class="has-text-centered has-text-light is-size-7 my-4">
          Released {{ movie.release_date }}
        </div>
      </div>
      <div class="movie__details box column is-two-thirds has-text-centered">
        <div>
          <h2 class="title is-size-4">
            {{ movie.title }}
          </h2>
          <p>
            {{ movie.overview }}
          </p>
        </div>
        <hr />
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
        <hr />
        <div>
          <h3 class="subtitle is-size-6">Choose your tickets:</h3>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Adults:</label>
            </div>
            <div class="field-body">
              <div class="field has-addons ticket-prices">
                <div class="control">
                  <input
                    class="input"
                    type="number"
                    v-model="adults"
                    size="2"
                    min="0"
                    max="99"
                  />
                </div>
                <div class="control ml-2 ticket-price">
                  <span class="tag is-info is-medium is-light">
                    ${{ adultPrice }}
                  </span>
                </div>
                <div class="control ticket-price">
                  <span class="tag is-success is-medium is-light">
                    ${{ adultTotal }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Kids:</label>
            </div>
            <div class="field-body">
              <div class="field has-addons ticket-prices">
                <div class="control">
                  <input
                    class="input"
                    type="number"
                    v-model="kids"
                    size="2"
                    min="0"
                    max="99"
                  />
                </div>
                <div class="control ml-2 ticket-price">
                  <span class="tag is-info is-medium is-light">
                    ${{ kidPrice }}
                  </span>
                </div>
                <div class="control ticket-price">
                  <span class="tag is-success is-medium is-light">
                    ${{ kidTotal }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Seniors:</label>
            </div>
            <div class="field-body">
              <div class="field has-addons ticket-prices">
                <div class="control">
                  <input
                    class="input"
                    type="number"
                    v-model="seniors"
                    size="2"
                    min="0"
                    max="99"
                  />
                </div>
                <div class="control ml-2 ticket-price">
                  <span class="tag is-info is-medium is-light">
                    ${{ seniorPrice }}
                  </span>
                </div>
                <div class="control ticket-price">
                  <span class="tag is-success is-medium is-light">
                    ${{ seniorTotal }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div class="tag is-success is-large">Your total: ${{ total }}</div>
          <div class="mt-4">
            <router-link to="/seats">
              <button class="button is-info" :disabled="total === 0">
                Next Step
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { add, format } from 'date-fns'
import { setMovieDetails } from '../utils/movies'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('movies')

import Card from '../components/Card/Card'

export default {
  name: 'Movie',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  components: {
    Card
  },
  data() {
    return {
      movie: {},
      date: new Date(),
      time: '07:00',
      adults: 0,
      kids: 0,
      seniors: 0,
      adultPrice: 14,
      kidPrice: 10,
      seniorPrice: 12
    }
  },
  created() {
    this.movie = { ...this.getMovie(this.id) }
  },
  computed: {
    ...mapGetters(['getMovie']),
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
    },
    adultTotal() {
      return this.adults * this.adultPrice
    },
    kidTotal() {
      return this.kids * this.kidPrice
    },
    seniorTotal() {
      return this.seniors * this.seniorPrice
    },
    total() {
      return this.adultTotal + this.kidTotal + this.seniorTotal
    }
  },
  methods: {
    getMovieDetails(movie) {
      return setMovieDetails(movie)
    }
  }
}
</script>
