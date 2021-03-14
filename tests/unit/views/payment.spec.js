import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Payment from '@/views/Payment'
import PaymentMethods from '@/components/PaymentMethods/PaymentMethods'
import PaymentSummary from '@/components/PaymentSummary/PaymentSummary'
import cart from '@/store/cart'
import seats from '@/store/seats'
import '@/filters/currency'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

const router = new VueRouter()

describe('Payment', () => {
  const store = new Vuex.Store({
    modules: {
      seats,
      cart: {
        ...cart
      }
    }
  })

  beforeEach(() => store)

  it('renders correctly', async () => {
    const wrapper = mount(Payment, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.findComponent(PaymentMethods).exists()).toBeTruthy()
    expect(wrapper.findComponent(PaymentSummary).exists()).toBeTruthy()
  })

  it('calls onSubmit method when form is submitted successfully', () => {
    const onSubmit = jest.spyOn(Payment.methods, 'onSubmit')

    const wrapper = mount(Payment, {
      localVue,
      store,
      router,
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
  })
})
