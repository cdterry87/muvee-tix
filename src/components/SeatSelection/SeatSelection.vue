<template>
  <div class="seats-grid">
    <table class="table is-bordered">
      <tr v-for="(row, rowIndex) in reversedRows" :key="rowIndex">
        <td
          v-for="(column, columnIndex) in columns"
          :key="columnIndex"
          class="seat"
          :class="getSeatClasses(row, column)"
        >
          <label class="seat__label" :for="getSeatByRowAndColumn(row, column)">
            <input
              type="checkbox"
              v-model="selectedSeats"
              :value="getSeatByRowAndColumn(row, column)"
              :name="getSeatByRowAndColumn(row, column)"
              :id="getSeatByRowAndColumn(row, column)"
              :ref="getSeatByRowAndColumn(row, column)"
              class="visually-hidden"
              :disabled="
                claimedSeats.includes(getSeatByRowAndColumn(row, column))
              "
            />
            {{ getSeatByRowAndColumn(row, column) }}
          </label>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('cart')

export default {
  name: 'SeatSelection',
  data() {
    return {
      selectedSeats: []
    }
  },
  props: {
    rows: {
      type: Number,
      default: 1
    },
    columns: {
      type: Number,
      default: 1
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters('cart', ['totalSeats', 'totalSeatsSelected']),
    ...mapGetters('seats', ['claimedSeats']),
    reversedRows() {
      return [...Array(this.rows).keys()].reverse()
    }
  },
  watch: {
    selectedSeats(newValue, oldValue) {
      if (newValue !== oldValue) this.setCartSeats(newValue)
    }
  },
  mounted() {
    this.setSeatsFromState()
  },
  methods: {
    ...mapActions(['setCartSeats']),
    getSeatByRowAndColumn(row, column) {
      return `${String.fromCharCode(row + 65)}${column}`
    },
    getSeatClasses(row, column) {
      return {
        'has-background-light': this.claimedSeats.includes(
          this.getSeatByRowAndColumn(row, column)
        ),
        'has-text-grey-light': this.claimedSeats.includes(
          this.getSeatByRowAndColumn(row, column)
        ),
        'has-background-success-light':
          this.totalSeatsSelected === this.totalSeats &&
          this.selectedSeats.includes(this.getSeatByRowAndColumn(row, column)),
        'has-background-danger-light':
          this.totalSeatsSelected > this.totalSeats &&
          this.selectedSeats.includes(this.getSeatByRowAndColumn(row, column)),
        'has-background-link-light':
          this.totalSeatsSelected < this.totalSeats &&
          this.selectedSeats.includes(this.getSeatByRowAndColumn(row, column))
      }
    },
    setSeatsFromState() {
      if (!this.cart.seats) return
      this.selectedSeats = this.cart.seats
    }
  }
}
</script>
