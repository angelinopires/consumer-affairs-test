// HELPERS
import { isFormValid, validateInputError } from '../../helpers/Form'
import Mortgage from '../../helpers/Mortgage'
import setMortgageResults from '../../helpers/SetMortgageResult'

const button = document.querySelector('.button')
const form = document.querySelector('.calculator__form')
const insuranceInput = document.querySelector('.calculator__formGroup--insurance input')
const interestInput = document.querySelector('.input--interest input')
const interestSlider = document.querySelector('.slider__input--interest')
const loanInput = document.querySelector('.calculator__formGroup--loan input')
const results = document.querySelector('.results')
const taxInput = document.querySelector('.calculator__formGroup--tax input')
const yearsInput = document.querySelector('.input--years input')
const yearsSlider = document.querySelector('.slider__input--years')

const mortgage = new Mortgage()

const clearInputs = () => {
  insuranceInput.value = 0
  interestInput.value = 5
  interestSlider.value = 5
  loanInput.value = 0
  taxInput.value = 0
  yearsInput.value = 20
  yearsSlider.value = 20
}

yearsSlider.addEventListener('input', (event) => {
  const { value } = event.target

  mortgage.setYears(value)
  yearsInput.value = value
  validateInputError(yearsInput)
})

yearsInput.addEventListener('input', (event) => {
  const { value } = event.target

  mortgage.setYears(value)
  yearsSlider.value = value
  validateInputError(yearsInput)
})

interestSlider.addEventListener('input', (event) => {
  const { value } = event.target

  mortgage.setInterest(value)
  interestInput.value = value
  validateInputError(interestInput)
})

interestInput.addEventListener('input', (event) => {
  const { value } = event.target

  mortgage.setInterest(value)
  interestSlider.value = value
  validateInputError(interestInput)
})

loanInput.addEventListener('input', (event) => {
  const { value } = event.target

  mortgage.setLoan(value)
  validateInputError(loanInput)
})

taxInput.addEventListener('input', (event) => {
  const { value } = event.target

  mortgage.setAnnualTax(value)
  validateInputError(taxInput)
})

insuranceInput.addEventListener('input', (event) => {
  const { value } = event.target

  mortgage.setAnnualInsurance(value)
  validateInputError(insuranceInput)
})

form.addEventListener('input', () => {
  button.disabled = !isFormValid(form)
})

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (!isFormValid(form)) return

  setMortgageResults(mortgage.calculateMortgageResult())
  results.classList.remove('results--hidden')
})

window.addEventListener('load', () => {
  mortgage.setYears(yearsInput.value)
  mortgage.setInterest(interestInput.value)
})

window.addEventListener('beforeunload', (event) => {
  event.preventDefault()

  clearInputs()

  form.removeEventListener('input', () => { })
  form.removeEventListener('submit', () => { })
  insuranceInput.removeEventListener('input', () => { })
  loanInput.removeEventListener('input', () => { })
  interestInput.removeEventListener('input', () => { })
  interestSlider.removeEventListener('input', () => { })
  taxInput.removeEventListener('input', () => { })
  yearsInput.removeEventListener('input', () => { })
  yearsSlider.removeEventListener('input', () => { })
  window.removeEventListener('load', () => { })
})
