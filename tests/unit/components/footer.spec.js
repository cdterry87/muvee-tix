import { mount, createLocalVue } from '@vue/test-utils'
import Footer from '@/components/Footer/Footer'

const localVue = createLocalVue()

describe('Footer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Footer, {
      localVue
    })
  })

  it('renders correctly', () => {
    expect(wrapper.find('footer').exists()).toBeTruthy()
  })
})
