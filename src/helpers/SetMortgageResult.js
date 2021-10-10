const insuranceElement = document.querySelector('.results__value--insurance')
const interestElement = document.querySelector('.results__value--interest')
const taxElement = document.querySelector('.results__value--tax')
const totalElement = document.querySelector('.results__value--total')

/**
 * Set the mortgage results on the respective elements.
 * @param {import('./Mortgage').MortgageResult} mortgageResults
 *
*/
const setMortgageResults = (mortgageResults) => {
  const {
    principleAndInterest, insurance, tax, monthlyPayment,
  } = mortgageResults

  interestElement.textContent = principleAndInterest
  taxElement.textContent = tax
  insuranceElement.textContent = insurance
  totalElement.textContent = monthlyPayment
}

export default setMortgageResults
