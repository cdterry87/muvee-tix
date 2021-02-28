import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SnackListItem from '@/components/SnackListItem/SnackListItem'

import cart from '@/store/cart'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart
  }
})

const propsData = {
  title: 'Water',
  name: 'water',
  image: 'water.png',
  price: '5'
}

describe('SnackList', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SnackListItem, {
      localVue,
      store,
      propsData
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders correctly', async () => {
    const quantity = 2

    const imageElement = wrapper.find('[data-testid="image"]')
    const titleElement = wrapper.find('[data-testid="title"]')
    const priceElement = wrapper.find('[data-testid="price"]')
    const quantityElement = wrapper.find('[data-testid="quantity"]')
    const totalElement = wrapper.find('[data-testid="total"]')

    expect(imageElement.exists()).toBeTruthy()

    expect(titleElement.exists()).toBeTruthy()
    expect(titleElement.text()).toContain(propsData.title)

    expect(priceElement.exists()).toBeTruthy()
    expect(priceElement.text()).toContain(propsData.price)

    expect(quantityElement.exists()).toBeTruthy()
    quantityElement.setValue(quantity)
    quantityElement.trigger('change')

    await wrapper.vm.$nextTick()

    const total = `$${(Number(propsData.price) * quantity).toFixed(2)}`
    expect(totalElement.exists()).toBeTruthy()
    expect(totalElement.text()).toContain(total)
  })
})
