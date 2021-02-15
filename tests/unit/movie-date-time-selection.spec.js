import { mount, createLocalVue } from '@vue/test-utils'
import MovieDateTimeSelection from '@/components/MovieDateTimeSelection/MovieDateTimeSelection'
import Vuex from 'vuex'
import cart from '@/store/cart'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart
  }
})

describe('Card', () => {
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
})
