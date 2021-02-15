import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Home from '@/views/Home'
import Card from '@/components/Card/Card'
import Vuex from 'vuex'
import movies from '@/mocks/movies'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    movies: {
      namespaced: true,
      state: {
        movies
      }
    }
  }
})

describe('Home', () => {
  it('renders list of movies correctly', () => {
    const wrapper = mount(Home, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    const { movies } = wrapper.vm.$store.state.movies
    expect(wrapper.findAllComponents(Card)).toHaveLength(movies.length)
  })

  xit('redirects to movie page when card is clicked', () => {
    //
  })
})
