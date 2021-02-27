import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import SnackList from '@/views/Snacks'
import SnackListItem from '@/components/SnackListItem/SnackListItem'

import cart from '@/store/cart'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart
  }
})

describe('SnackList', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SnackList, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders correctly', () => {
    const title = wrapper.find('.title')
    expect(title.exists()).toBeTruthy()
    expect(title.text()).toContain('Choose your snacks')
    expect(wrapper.findComponent(SnackListItem).exists()).toBeTruthy()
  })

  it('shows the total when an item quantity is greater than one', async () => {
    const input = wrapper.findAll('[data-testid="quantity"]').at(1)
    input.setValue(2)
    await input.trigger('change')
    await wrapper.vm.$nextTick()

    const total = wrapper.find('[data-testid="total"]')
    expect(total.exists()).toBeTruthy()
  })
})
