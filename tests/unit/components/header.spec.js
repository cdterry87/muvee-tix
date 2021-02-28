import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Header from '@/components/Header/Header'

const localVue = createLocalVue()

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Header, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.find('header').exists()).toBeTruthy()
    expect(wrapper.find('.title').exists()).toBeTruthy()
    expect(wrapper.find('.title').text()).toContain('Muvee Tix')
  })
})
