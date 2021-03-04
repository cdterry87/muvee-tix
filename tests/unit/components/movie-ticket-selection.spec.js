import { mount, createLocalVue } from '@vue/test-utils'
import MovieTicketSelection from '@/components/MovieTicketSelection/MovieTicketSelection'
import Vuex from 'vuex'
import cart from '@/store/cart'
import '@/filters/currency'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart
  }
})

describe('MovieTicketSelection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(MovieTicketSelection, {
      localVue,
      store
    })
  })

  it('renders correctly', () => {
    expect(wrapper.find('.subtitle').text()).toContain('Choose your tickets:')
    expect(wrapper.findAll('input')).toHaveLength(3)
    expect(wrapper.findAll('.tag')).toHaveLength(6)
  })

  it('calculates adults total', async () => {
    wrapper.find('[data-testid="input-adults"]').setValue(2)
    await wrapper.vm.$nextTick()

    const adultsTotal = wrapper.find('[data-testid="adults-total"]')
    expect(adultsTotal.exists()).toBeTruthy()
    expect(adultsTotal.classes()).toContain('is-success')
    expect(adultsTotal.text()).toContain('$28')
  })

  it('calculates kids total', async () => {
    wrapper.find('[data-testid="input-kids"]').setValue(2)
    await wrapper.vm.$nextTick()

    const kidsTotal = wrapper.find('[data-testid="kids-total"]')
    expect(kidsTotal.exists()).toBeTruthy()
    expect(kidsTotal.classes()).toContain('is-success')
    expect(kidsTotal.text()).toContain('$20')
  })

  it('calculates seniors total', async () => {
    wrapper.find('[data-testid="input-seniors"]').setValue(2)
    await wrapper.vm.$nextTick()

    const seniorsTotal = wrapper.find('[data-testid="seniors-total"]')
    expect(seniorsTotal.exists()).toBeTruthy()
    expect(seniorsTotal.classes()).toContain('is-success')
    expect(seniorsTotal.text()).toContain('$24')
  })

  it('shows the total when tickets are selected', async () => {
    wrapper.find('[data-testid="input-adults"]').setValue(2)
    wrapper.find('[data-testid="input-kids"]').setValue(1)
    wrapper.find('[data-testid="input-seniors"]').setValue(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="ticket-total"]').exists()).toBeTruthy()
  })
})
