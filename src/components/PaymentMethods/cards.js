const visa = {
  label: 'Visa',
  value: 'visa',
  fields: {
    columns: [
      {
        label: 'Card Number',
        icon: 'fas fa-credit-card',
        class: 'is-full',
        attributes: {
          name: 'number',
          type: 'text',
          placeholder: '4000 0000 0000 0000',
          maxlength: '19',
          pattern: '^4(?:\\d{12}|\\d{15})$',
          class: 'input',
          required: true
        }
      },
      {
        label: 'Expiration Date',
        class: 'is-half',
        attributes: {
          name: 'expiration',
          type: 'text',
          placeholder: 'MM/YY',
          maxlength: '5',
          pattern: '(0[1-9]|1[0-2])\\/[0-9]{2}',
          class: 'input',
          required: true
        }
      },
      {
        label: 'CVV',
        class: 'is-half',
        attributes: {
          name: 'cvv',
          type: 'text',
          placeholder: '000',
          maxlength: '3',
          pattern: '^[0-9]{3}$',
          class: 'input',
          required: true
        }
      }
    ]
  }
}

const mastercard = {
  label: 'Master Card',
  value: 'mastercard',
  fields: {
    columns: [
      {
        label: 'Card Number',
        icon: 'fas fa-credit-card',
        class: 'is-full',
        attributes: {
          name: 'number',
          type: 'text',
          placeholder: '3000 0000 0000 0000',
          maxlength: '19',
          pattern: '^3(?:\\d{12}|\\d{15})$',
          class: 'input',
          required: true
        }
      },
      {
        label: 'Expiration Date',
        class: 'is-half',
        attributes: {
          name: 'expiration',
          type: 'text',
          placeholder: 'MM/YY',
          maxlength: '5',
          pattern: '(0[1-9]|1[0-2])\\/[0-9]{2}',
          class: 'input',
          required: true
        }
      },
      {
        label: 'CVV',
        class: 'is-half',
        attributes: {
          name: 'cvv',
          type: 'text',
          placeholder: '000',
          maxlength: '3',
          pattern: '^[0-9]{3}$',
          class: 'input',
          required: true
        }
      }
    ]
  }
}

const americanexpress = {
  label: 'American Express',
  value: 'americanexpress',
  fields: {
    columns: [
      {
        label: 'Card Number',
        icon: 'fas fa-credit-card',
        class: 'is-full',
        attributes: {
          name: 'number',
          type: 'text',
          placeholder: '3700 000000 00000',
          maxlength: '17',
          pattern: '^(?:34|37)\\d{13}$',
          class: 'input',
          required: true
        }
      },
      {
        label: 'Expiration Date',
        class: 'is-half',
        attributes: {
          name: 'expiration',
          type: 'text',
          placeholder: 'MM/YY',
          maxlength: '5',
          pattern: '(0[1-9]|1[0-2])\\/[0-9]{2}',
          class: 'input',
          required: true
        }
      },
      {
        label: 'CVV',
        class: 'is-half',
        attributes: {
          name: 'cvv',
          type: 'text',
          placeholder: '0000',
          maxlength: '4',
          pattern: '^[0-9]{4}$',
          class: 'input',
          required: true
        }
      }
    ]
  }
}

const discover = {
  label: 'Discover',
  value: 'discover',
  fields: {
    columns: [
      {
        label: 'Card Number',
        icon: 'fas fa-credit-card',
        class: 'is-full',
        attributes: {
          name: 'number',
          type: 'text',
          placeholder: '6000 0000 0000 0000',
          maxlength: '17',
          pattern: '^6\\d{5,}$',
          class: 'input',
          required: true
        }
      },
      {
        label: 'Expiration Date',
        class: 'is-half',
        attributes: {
          name: 'expiration',
          type: 'text',
          placeholder: 'MM/YY',
          maxlength: '5',
          pattern: '(0[1-9]|1[0-2])\\/[0-9]{2}',
          class: 'input',
          required: true
        }
      },
      {
        label: 'CVV',
        class: 'is-half',
        attributes: {
          name: 'cvv',
          type: 'text',
          placeholder: '000',
          maxlength: '3',
          pattern: '^[0-9]{3}$',
          class: 'input',
          required: true
        }
      }
    ]
  }
}

const cards = {
  visa,
  mastercard,
  americanexpress,
  discover
}

export default cards
