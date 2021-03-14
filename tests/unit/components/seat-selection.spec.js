import { mount, createLocalVue } from '@vue/test-utils'
import SeatSelection from '@/components/SeatSelection/SeatSelection'
import Vuex from 'vuex'
import seats from '@/store/seats'

const localVue = createLocalVue()
localVue.use(Vuex)

function createWrapper(getters) {
  const store = new Vuex.Store({
    modules: {
      seats,
      cart: {
        namespaced: true,
        state: {
          cart: {
            movie: {
              id: 123
            }
          }
        },
        getters,
        actions: {
          setCartSeats: () => ''
        }
      }
    }
  })

  return mount(SeatSelection, {
    localVue,
    store,
    propsData: {
      rows: 5,
      columns: 4
    }
  })
}

describe('SeatSelection', () => {
  let getters

  beforeEach(() => {
    getters = {
      movie: () => '',
      totalSeats: () => 2,
      totalSeatsSelected: () => 0
    }
  })

  it('renders correctly', () => {
    const wrapper = createWrapper(getters)

    const numberOfSeats = wrapper.props('rows') * wrapper.props('columns')

    expect(wrapper.find('.seats-grid').exists()).toBeTruthy()
    expect(wrapper.find('table').exists()).toBeTruthy()
    expect(wrapper.findAll('.seat')).toHaveLength(numberOfSeats)
  })

  it('selects less than the correct number of seats and changes cell background color to blue', async () => {
    const wrapper = createWrapper(getters)

    const seat = wrapper.findAll('.seat__label').at(1)
    await seat.trigger('click')

    const selectedSeat = wrapper.findAll('.seat').at(1)
    expect(selectedSeat.classes('has-background-link-light')).toBe(true)
  })

  it('selects the correct number of seats and changes cell background color to green', async () => {
    const wrapper = createWrapper({
      movie: () => '',
      totalSeats: () => 2,
      totalSeatsSelected: () => 2
    })

    const seat = wrapper.findAll('.seat__label').at(1)
    await seat.trigger('click')

    const selectedSeat = wrapper.findAll('.seat').at(1)
    expect(selectedSeat.classes('has-background-success-light')).toBe(true)
  })

  it('selects more than the correct number of seats and changes cell background color to red', async () => {
    const wrapper = createWrapper({
      movie: () => '',
      totalSeats: () => 2,
      totalSeatsSelected: () => 3
    })

    const seat = wrapper.findAll('.seat__label').at(1)
    await seat.trigger('click')

    const selectedSeat = wrapper.findAll('.seat').at(1)
    expect(selectedSeat.classes('has-background-danger-light')).toBe(true)
  })
})
