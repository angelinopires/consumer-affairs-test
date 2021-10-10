import {
  getInsurancePrice, getMontlyPayment, getPrincipalAndInterests, getTaxPrice,
} from './CalculateMortgage'
import formatToCurrency from './FormatToCurrency'

const interestElement = document.querySelector('.results__value--interest')
const taxElement = document.querySelector('.results__value--tax')
const insuranceElement = document.querySelector('.results__value--insurance')
const totalElement = document.querySelector('.results__value--total')

const setMortgageResults = ({
  annualInsurance,
  annualTax,
  interest,
  loan,
  years,
}) => {
  const principalAndInterests = getPrincipalAndInterests(interest, loan, years)
  const taxPrice = getTaxPrice(annualTax)
  const insurancePrice = getInsurancePrice(annualInsurance)
  const total = getMontlyPayment(principalAndInterests, taxPrice, insurancePrice)

  interestElement.textContent = formatToCurrency({ value: principalAndInterests })
  taxElement.textContent = formatToCurrency({ value: taxPrice })
  insuranceElement.textContent = formatToCurrency({ value: insurancePrice })
  totalElement.textContent = formatToCurrency({ value: total })
}

export default setMortgageResults
