<template>
  <div class="seats-grid">
    <table class="table is-bordered">
      <tr v-for="(row, rowIndex) in reversedRows" :key="rowIndex">
        <td
          v-for="(column, columnIndex) in columns"
          :key="columnIndex"
          @click="onSeatSelect(getSeatByRowAndColumn(row, column))"
          class="seat"
        >
          <input
            type="checkbox"
            v-model="selectedSeats"
            :value="getSeatByRowAndColumn(row, column)"
            :name="getSeatByRowAndColumn(row, column)"
            :id="getSeatByRowAndColumn(row, column)"
            :ref="getSeatByRowAndColumn(row, column)"
            class="hidden-input"
          />
          <label :for="getSeatByRowAndColumn(row, column)">
            {{ getSeatByRowAndColumn(row, column) }}
          </label>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SeatsGrid',
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
    reversedRows() {
      return [...Array(this.rows).keys()].reverse()
    }
  },
  methods: {
    getSeatByRowAndColumn(row, column) {
      return `${String.fromCharCode(row + 65)}${column}`
    },
    onSeatSelect(seat) {
      const input = this.$refs[seat][0]
      const parent = input.parentElement
      input.checked = !input.checked

      input.checked
        ? parent.classList.add('has-background-link-light')
        : parent.classList.remove('has-background-link-light')
    }
  }
}
</script>
