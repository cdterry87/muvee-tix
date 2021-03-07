import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import PaymentMethods from '@/components/PaymentMethods/PaymentMethods'

import cards from '@/components/PaymentMethods/cards'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Payment', () => {
  it('renders correctly', async () => {
    const wrapper = mount(PaymentMethods, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.findAll('.radio')).toHaveLength(Object.keys(cards).length)

    expect(wrapper.find('input[name="number"]').exists()).toBeTruthy()
    expect(wrapper.find('input[name="expiration"]').exists()).toBeTruthy()
    expect(wrapper.find('input[name="cvv"]').exists()).toBeTruthy()
  })

  it('emits paymentSubmit method when form is submitted successfully', () => {
    const onSubmit = jest.spyOn(PaymentMethods.methods, 'onSubmit')

    const wrapper = mount(PaymentMethods, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    const card = {
      type: 'visa',
      number: '4444444444444444',
      expiration: '12/25',
      cvv: '123'
    }

    wrapper.find('[data-testid="visa.number"]').setValue(card.number)
    wrapper.find('[data-testid="visa.expiration"]').setValue(card.expiration)
    wrapper.find('[data-testid="visa.cvv"]').setValue(card.cvv)
    wrapper.find('[data-testid="form"]').trigger('submit')

    expect(onSubmit).toHaveBeenCalled()
    expect(wrapper.emitted('paymentSubmit')).toBeTruthy()
  })
})
