const validateInputError = (element) => {
  if (!element) return

  const parent = element.parentNode
  const errorText = element.nextElementSibling

  if (element.validity.valid) {
    parent.classList.remove('input--error')
    return
  }

  parent.classList.add('input--error')

  if (!errorText) return

  if (element.validity.rangeUnderflow || element.validity.tooShort) {
    errorText.textContent = 'Please, insert a amount bigger than $1'
    return
  }

  if (element.validity.rangeOverflow || element.validity.tooLong) {
    errorText.textContent = 'Please, insert a amount smaller than $1,000,000'
    return
  }

  if (element.validity.badInput) {
    errorText.textContent = 'Please, insert an integer number'
    return
  }

  if (element.validity.valueMissing) {
    errorText.textContent = 'Mandatory field'
  }
}

const isFormValid = (formElement) => {
  const allInputs = Array.from(formElement.querySelectorAll('input'))

  return allInputs.every((input) => input.validity.valid)
}

export { validateInputError, isFormValid }
