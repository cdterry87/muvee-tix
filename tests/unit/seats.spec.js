import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Seats from '@/views/Seats'
import SeatSelection from '@/components/SeatSelection/SeatSelection'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Seats', () => {
  let stubs

  beforeEach(() => {
    stubs = {
      RouterLink: RouterLinkStub
    }
  })

  it('renders correctly when no seats are selected and Next button is disabled', () => {
    const getters = {
      movie: () => '',
      totalSeats: () => 4,
      totalSeatsSelected: () => 0
    }

    const store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          getters
        }
      }
    })

    const wrapper = shallowMount(Seats, {
      localVue,
      store,
      stubs
    })

    expect(wrapper.find('h2').text()).toContain('Select your seats')
    expect(wrapper.find('.notification.is-info').exists()).toBeTruthy()
    expect(wrapper.findComponent(SeatSelection).exists()).toBeTruthy()
    expect(wrapper.find('h4').text()).toContain('FRONT OF THEATER')

    const prevButton = wrapper.find('[data-testid="prev-button"]')
    expect(prevButton.exists()).toBeTruthy()

    const nextButton = wrapper.find('[data-testid="next-button"]')
    expect(nextButton.exists()).toBeTruthy()
    expect(nextButton.element.disabled === true).toBeTruthy()
  })

  it('renders correctly when totalSeats matches totalSeatsSelected and Next button is enabled', () => {
    const getters = {
      movie: () => '',
      totalSeats: () => 4,
      totalSeatsSelected: () => 4
    }

    const store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          getters
        }
      }
    })

    const wrapper = shallowMount(Seats, {
      localVue,
      store,
      stubs
    })

    expect(wrapper.find('.notification.is-success').exists()).toBeTruthy()

    const nextButton = wrapper.find('[data-testid="next-button"]')
    expect(nextButton.exists()).toBeTruthy()
    expect(nextButton.element.disabled === true).toBeFalsy()
  })

  it('renders correctly when totalSeats exceeds totalSeatsSelected and Next button is disabled', () => {
    const getters = {
      movie: () => '',
      totalSeats: () => 4,
      totalSeatsSelected: () => 5
    }

    const store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          getters
        }
      }
    })

    const wrapper = shallowMount(Seats, {
      localVue,
      store,
      stubs
    })

    expect(wrapper.find('.notification.is-danger').exists()).toBeTruthy()

    const nextButton = wrapper.find('[data-testid="next-button"]')
    expect(nextButton.exists()).toBeTruthy()
    expect(nextButton.element.disabled === true).toBeTruthy()
  })
})
