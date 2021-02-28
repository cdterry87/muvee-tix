import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Movie from '@/views/Movie'
import Card from '@/components/Card/Card'
import MovieDateTimeSelection from '@/components/MovieDateTimeSelection/MovieDateTimeSelection'
import MovieTicketSelection from '@/components/MovieTicketSelection/MovieTicketSelection'

import movies from '@/mocks/movies'

const localVue = createLocalVue()
localVue.use(Vuex)

function createWrapper(cartStore) {
  const store = new Vuex.Store({
    modules: {
      cart: {
        namespaced: true,
        state: {
          ...cartStore
        },
        actions: {
          setCartMovie: jest.fn(),
          setCartDate: jest.fn(),
          setCartTime: jest.fn(),
          setCartTickets: jest.fn(),
          resetCartState: jest.fn()
        }
      },
      movies: {
        namespaced: true,
        state: {
          movies
        },
        getters: {
          getMovie: state => id =>
            state.movies.find(movie => movie.id === parseInt(id))
        }
      }
    }
  })

  return shallowMount(Movie, {
    localVue,
    store,
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: {
      id: 464052
    }
  })
}

describe('Movie', () => {
  it('renders movie details correctly', () => {
    const wrapper = createWrapper({
      cart: {
        date: '',
        time: '',
        tickets: {
          adults: 0,
          kids: 0,
          seniors: 0
        }
      }
    })

    expect(wrapper.find('.title').exists()).toBeTruthy()
    expect(wrapper.findComponent(Card).exists()).toBeTruthy()
    expect(wrapper.findComponent(MovieDateTimeSelection).exists()).toBeTruthy()
    expect(wrapper.findComponent(MovieTicketSelection).exists()).toBeTruthy()

    const nextButton = wrapper.find('[data-testid="next-button"]')
    expect(nextButton.exists()).toBeTruthy()
    expect(nextButton.element.disabled === true).toBeTruthy()
  })

  it('enables Next button when required fields are filled out', () => {
    const wrapper = createWrapper({
      cart: {
        date: '2021-01-21',
        time: '08:00',
        tickets: {
          adults: 1,
          kids: 1,
          seniors: 1
        }
      }
    })

    const nextButton = wrapper.find('[data-testid="next-button"]')
    expect(nextButton.element.disabled === true).toBeFalsy()
  })
})
