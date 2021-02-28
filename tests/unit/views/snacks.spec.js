import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Snacks from '@/views/Snacks'
import SnackList from '@/components/SnackList/SnackList'

const localVue = createLocalVue()

describe('Snacks', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Snacks, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.findComponent(SnackList).exists()).toBeTruthy()

    const prevButton = wrapper.find('[data-testid="prev-button"]')
    expect(prevButton.exists()).toBeTruthy()
    expect(prevButton.element.disabled).toBeFalsy()

    const nextButton = wrapper.find('[data-testid="next-button"]')
    expect(nextButton.exists()).toBeTruthy()
    expect(nextButton.element.disabled).toBeFalsy()
  })
})
