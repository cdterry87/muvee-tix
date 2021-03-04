import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Summary from '@/views/Summary'
import Card from '@/components/Card/Card'
import cart from '@/store/cart'
import '@/filters/currency'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Summary', () => {
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
    const wrapper = shallowMount(Summary, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.findComponent(Card).exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="thank-you"]').text()).toContain('Thank you for your purchase!')
    expect(wrapper.find('[data-testid="thank-you-message"]').text()).toContain('We hope you enjoy your movie!')
    expect(wrapper.find('[data-testid="movie-title"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="order-summary"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="taxes"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="total"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="home-button"]').exists()).toBeTruthy()
  })

  it('renders totals for adults, kids, and seniors', () => {
    cartStore.state.cart.tickets.adults = 2
    cartStore.state.cart.tickets.kids = 2
    cartStore.state.cart.tickets.seniors = 2

    const wrapper = shallowMount(Summary, {
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
        label: 'Snack One',
        quantity: 1,
        price: 2
      },
      test2: {
        label: 'Snack Two',
        quantity: 2,
        price: 3
      }
    }

    const wrapper = shallowMount(Summary, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    const snackLength = Object.keys(cartStore.state.cart.snacks).length
    const snackItem = wrapper.findAll('[data-testid="snack-item"]')
    expect(snackItem).toHaveLength(snackLength)
  })
})
