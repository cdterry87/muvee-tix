import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Movie from '@/views/Movie'
import Card from '@/components/Card/Card'
import MovieDateTimeSelection from '@/components/MovieDateTimeSelection/MovieDateTimeSelection'
import MovieTicketSelection from '@/components/MovieTicketSelection/MovieTicketSelection'

import cart from '@/store/cart'
import movies from '@/mocks/movies'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
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
  let wrapper

  beforeEach(() => {
    wrapper = mount(Movie, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        id: 464052
      }
    })
  })

  it('renders movie details correctly', () => {
    expect(wrapper.find('.title').exists()).toBeTruthy()
    expect(wrapper.findComponent(Card).exists()).toBeTruthy()
    expect(wrapper.findComponent(MovieDateTimeSelection).exists()).toBeTruthy()
    expect(wrapper.findComponent(MovieTicketSelection).exists()).toBeTruthy()

    const nextButton = wrapper.find('button')
    expect(nextButton.exists()).toBeTruthy()
    expect(nextButton.element.disabled === true).toBeTruthy()
  })

  xit('enables Next button when required fields are filled out', () => {
    // date
    // time
    // ticket selection
    expect(wrapper.find('button').element.disabled === true).toBeFalsy()
  })
})
