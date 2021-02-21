import { mount, createLocalVue } from '@vue/test-utils'
import MovieDateTimeSelection from '@/components/MovieDateTimeSelection/MovieDateTimeSelection'
import Vuex from 'vuex'
import cart from '@/store/cart'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  setCartDate: jest.fn(),
  setCartTime: jest.fn()
}

const store = new Vuex.Store({
  modules: {
    cart: {
      ...cart,
      actions
    }
  }
})

describe('MovieDateTimeSelection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(MovieDateTimeSelection, {
      localVue,
      store
    })
  })

  it('renders correctly', () => {
    expect(wrapper.find('.subtitle').text()).toContain(
      'Select a date and time:'
    )
    expect(wrapper.findAll('select')).toHaveLength(2)
  })

  it('sets date and time in cart', () => {
    const date = wrapper.find('[data-testid="date"]')
    date.element.value = '2021-01-21'
    date.trigger('change')
    expect(actions.setCartDate).toHaveBeenCalled()

    const time = wrapper.find('[data-testid="time"]')
    time.element.value = '08:00'
    time.trigger('change')
    expect(actions.setCartTime).toHaveBeenCalled()
  })
})
