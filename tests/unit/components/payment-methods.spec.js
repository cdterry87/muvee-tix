import { mount, createLocalVue } from '@vue/test-utils'
import PaymentMethods from '@/components/PaymentMethods/PaymentMethods'

const localVue = createLocalVue()

describe('SnackListItem', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PaymentMethods, {
      localVue
    })
  })

  xit('renders correctly', () => {
    //
  })
})
