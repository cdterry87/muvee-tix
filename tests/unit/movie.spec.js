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
  })

  xit('shows the total when tickets are selected', async () => {
    wrapper.find('[data-testid="input-adults"]').setValue(2)
    wrapper.find('[data-testid="input-kids"]').setValue(1)
    wrapper.find('[data-testid="input-seniors"]').setValue(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="ticket-total"]').exists()).toBeTruthy()
  })

  xit('enables the next button when required fields are filled out', async () => {
    // await wrapper.vm.$nextTick()
  })
})
