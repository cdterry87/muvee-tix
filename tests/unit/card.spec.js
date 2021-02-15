import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Card from '@/components/Card/Card'

const localVue = createLocalVue()

describe('Card', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Card, {
      localVue,
      propsData: {
        id: 464052,
        link: '/movie/464052',
        image: {
          src:
            'https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
          alt: 'Movie Poster for Movie Title'
        },
        title: 'Movie Title'
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.find('.card__container').exists()).toBeTruthy()
    expect(wrapper.find('.title').exists()).toBeTruthy()
    expect(wrapper.find('img').exists()).toBeTruthy()
  })

  it('does not render title if hasTitle is false', async () => {
    await wrapper.setProps({
      hasTitle: false
    })

    expect(wrapper.find('.title').exists()).toBeFalsy()
  })
})
