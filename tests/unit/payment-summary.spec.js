import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import PaymentSummary from '@/components/PaymentSummary/PaymentSummary'
import Card from '@/components/Card/Card'

import cart from '@/store/cart'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PaymentSummary', () => {
  const cartStore = cart
  const store = new Vuex.Store({
    modules: {
      cart: {
        ...cartStore
      }
    }
  })

  beforeEach(() => store)

  it('renders correctly', async () => {
    const wrapper = shallowMount(PaymentSummary, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.title').text()).toBe('Summary')
    expect(wrapper.find('.movie__title').exists()).toBeTruthy()
    expect(wrapper.findComponent(Card).exists()).toBeTruthy()
    expect(wrapper.find('table').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="taxes"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="total"]').exists()).toBeTruthy()
  })

  it('renders totals for adults, kids, and seniors', () => {
    cartStore.state.cart.tickets.adults = 2
    cartStore.state.cart.tickets.kids = 2
    cartStore.state.cart.tickets.seniors = 2

    const wrapper = shallowMount(PaymentSummary, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    const adults = wrapper.find('[data-testid="total-price-adults"]')
    expect(adults.exists()).toBeTruthy()
    expect(adults.text()).toContain(
      `$${cartStore.state.cart.tickets.adults * cartStore.state.prices.adults}`
    )

    const kids = wrapper.find('[data-testid="total-price-kids"]')
    expect(kids.exists()).toBeTruthy()
    expect(kids.text()).toContain(
      `$${cartStore.state.cart.tickets.kids * cartStore.state.prices.kids}`
    )

    const seniors = wrapper.find('[data-testid="total-price-seniors"]')
    expect(seniors.exists()).toBeTruthy()
    expect(seniors.text()).toContain(
      `$${cartStore.state.cart.tickets.seniors * cartStore.state.prices.seniors}`
    )
  })

  it('renders totals for snacks', () => {
    cartStore.state.cart.snacks = {
      test1: {
        quantity: 1,
        price: 2
      },
      test2: {
        quantity: 2,
        price: 3
      }
    }

    const wrapper = shallowMount(PaymentSummary, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    let snacksTotal = 0
    Object.values(cartStore.state.cart.snacks).forEach(snack => {
      snacksTotal = snacksTotal + snack.price * snack.quantity
    })

    const snacks = wrapper.find('[data-testid="total-price-snacks"]')
    expect(snacks.exists()).toBeTruthy()
    expect(snacks.text()).toContain(`$${snacksTotal}`)
  })
})
