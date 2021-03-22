import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import NotFound from '@/views/NotFound'

const localVue = createLocalVue()

describe('NotFound', () => {
  it('renders correctly', () => {
    const wrapper = mount(NotFound, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.find('i').exists()).toBeTruthy()
    expect(wrapper.find('h2').text()).toBe('Page Not Found')
    expect(wrapper.find('p').exists()).toBeTruthy()
    expect(wrapper.find('a.button').text()).toBe('Return to Home')
  })
})
