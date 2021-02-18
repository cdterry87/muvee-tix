import { mount, createLocalVue } from '@vue/test-utils'
import SeatSelection from '@/components/SeatSelection/SeatSelection'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const getters = {
  movie: () => '',
  totalSeats: () => 4,
  totalSeatsSelected: () => 0
}

const store = new Vuex.Store({
  modules: {
    cart: {
      namespaced: true,
      state: {
        cart: {}
      },
      getters,
      actions: {
        setCartSeats: () => ''
      }
    }
  }
})

describe('SeatSelection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SeatSelection, {
      localVue,
      store,
      propsData: {
        rows: 6,
        columns: 10
      }
    })
  })

  it('renders correctly', () => {
    const numberOfSeats = wrapper.props('rows') * wrapper.props('columns')

    expect(wrapper.find('.seats-grid').exists()).toBeTruthy()
    expect(wrapper.find('table').exists()).toBeTruthy()
    expect(wrapper.findAll('.seat')).toHaveLength(numberOfSeats)
  })

  it('selects a seat and changes cell background color', async () => {
    const seat = wrapper.findAll('.seat__label').at(1)
    await seat.trigger('click')

    const selectedSeat = wrapper.findAll('.seat').at(1)
    expect(selectedSeat.classes('has-background-link-light')).toBe(true)
  })
})
