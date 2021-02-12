import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Movie from '@/views/Movie'
import Card from '@/components/Card/Card'
import MovieDateTimeSelection from '@/components/MovieDateTimeSelection/MovieDateTimeSelection'
import MovieTicketSelection from '@/components/MovieTicketSelection/MovieTicketSelection'

import movies from '@/mocks/movies'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart: {
      namespaced: true,
      state: {
        cart: {
          movie: {},
          date: '',
          time: '',
          tickets: {
            adults: 0,
            kids: 0,
            seniors: 0
          },
          seats: [],
          snacks: {},
          payment: {
            type: '',
            card: '',
            expiration: '',
            cvv: ''
          },
          taxes: ''
        },
        prices: {
          adults: 14,
          kids: 10,
          seniors: 12
        }
      },
      getters: {
        totalTicketPrices: () => {
          return {
            adults: 0,
            kids: 0,
            seniors: 0,
            total: 0
          }
        }
      },
      actions: {
        setCartMovie: jest.fn(),
        setCartDate: jest.fn(),
        setCartTime: jest.fn(),
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

describe('Movie', () => {
  it('renders movie details correctly', () => {
    const wrapper = mount(Movie, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        id: 464052
      }
    })

    expect(wrapper.findComponent(Card).exists()).toBeTruthy()
    expect(wrapper.findComponent(MovieDateTimeSelection).exists()).toBeTruthy()
    expect(wrapper.findComponent(MovieTicketSelection).exists()).toBeTruthy()
  })
})
