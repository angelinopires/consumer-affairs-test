import { isFormValid, validateInputError } from '../../helpers/Form'
import setMortgageResults from '../../helpers/SetMortgageResult'

const button = document.querySelector('.button')
const form = document.querySelector('.calculator__form')
const insuranceInput = document.querySelector('.calculator__formGroup--insurance input')
const loanInput = document.querySelector('.calculator__formGroup--loan input')
const rateInput = document.querySelector('.input--interest')
const rateSlider = document.querySelector('.slider__input--interest')
const results = document.querySelector('.results')
const taxInput = document.querySelector('.calculator__formGroup--tax input')
const yearsInput = document.querySelector('.input--years')
const yearsSlider = document.querySelector('.slider__input--years')

const mortgageResult = {
  annualInsurance: 0,
  annualTax: 0,
  interest: 0,
  loan: 0,
  years: 0,
}

yearsSlider.addEventListener('input', (event) => {
  const { value } = event.target

  mortgageResult.years = Number(value)
  yearsInput.value = value
  validateInputError(yearsInput)
})

yearsInput.addEventListener('input', (event) => {
  const { value } = event.target

  mortgageResult.years = Number(value)
  yearsSlider.value = value
  validateInputError(yearsInput)
})

rateSlider.addEventListener('input', (event) => {
  const { value } = event.target

  mortgageResult.interest = Number(value)
  rateInput.value = value
  validateInputError(rateInput)
})

rateInput.addEventListener('input', (event) => {
  const { value } = event.target

  mortgageResult.interest = Number(value)
  rateSlider.value = value
  validateInputError(rateInput)
})

loanInput.addEventListener('input', (event) => {
  const { value } = event.target

  mortgageResult.loan = Number(value)
  validateInputError(loanInput)
})

taxInput.addEventListener('input', (event) => {
  const { value } = event.target

  mortgageResult.annualTax = Number(value)
  validateInputError(taxInput)
})

insuranceInput.addEventListener('input', (event) => {
  const { value } = event.target

  mortgageResult.annualInsurance = Number(value)
  validateInputError(insuranceInput)
})

form.addEventListener('input', () => {
  button.disabled = !isFormValid(form)
})

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (!isFormValid(form)) return

  setMortgageResults({ ...mortgageResult })
  results.classList.remove('results--hidden')
})

window.addEventListener('load', () => {
  mortgageResult.years = yearsInput.value
  mortgageResult.interest = rateInput.value
})

window.addEventListener('beforeunload', (event) => {
  event.preventDefault()

  form.removeEventListener('input', () => { })
  form.removeEventListener('submit', () => { })
  insuranceInput.removeEventListener('input', () => { })
  loanInput.removeEventListener('input', () => { })
  rateInput.removeEventListener('input', () => { })
  rateSlider.removeEventListener('input', () => { })
  taxInput.removeEventListener('input', () => { })
  yearsInput.removeEventListener('input', () => { })
  yearsSlider.removeEventListener('input', () => { })
  window.removeEventListener('load', () => { })
})
