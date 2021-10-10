// HELPERS
import formatToCurrency from './FormatToCurrency'

/**
 * The result of a Mortgage calculation.
 * @typedef {Object} MortgageResult
 * @type {object}
 * @property {string} insurance - Insurance amount.
 * @property {string} monthlyPayment - The amount of money that will be paid per month.
 * @property {string} principleAndInterest - Money that goes to the lender in exchange for the loan.
 * @property {string} tax - Tax amount of the loan.
*/

/** Class that represents a Mortgage. */
class Mortgage {
  constructor() {
    this.annualInsurance = 0
    this.annualTax = 0
    this.interest = 0
    this.loan = 0
    this.years = 0
  }

  /**
   * Calculate and return the tax price.
   * @returns {number} - Tax price of a month.
   *
  */
  getTaxPrice() {
    return this.annualTax / 12
  }

  /**
   * Calculate and return the insurance price.
   * @returns {number} - Insurance price of a month.
   *
  */
  getInsurancePrice() {
    return this.annualInsurance / 12
  }

  /**
   * Calculate and return the principle & interest.
   * @returns {number} Total of principle & interest per month.
   *
  */
  getPrincipleAndInterests() {
    const months = 12
    const interestRatePerMonth = (this.interest / 100) / months

    const result = (interestRatePerMonth * this.loan)
      / (1 - (1 + interestRatePerMonth) ** (-this.years * months))

    return result
  }

  /**
   * Calculate and return the total value per month.
   * @returns {number} Sum of interests, taxes and insurance.
   *
  */
  getMontlyPayment() {
    const principleAndInterests = this.getPrincipleAndInterests()
    const tax = this.getTaxPrice()
    const insurance = this.getInsurancePrice()

    return principleAndInterests + tax + insurance
  }

  /**
   * Calculate and return the final results of a mortgage calculation
   * @returns {MortgageResult}
  */
  calculateMortgageResult() {
    const insurance = formatToCurrency(this.getInsurancePrice())
    const monthlyPayment = formatToCurrency(this.getMontlyPayment())
    const principleAndInterest = formatToCurrency(this.getPrincipleAndInterests())
    const tax = formatToCurrency(this.getTaxPrice())

    return {
      insurance,
      monthlyPayment,
      principleAndInterest,
      tax,
    }
  }

  /**
   * Set the annual insurance amount.
   * @param {number} annualInsurance
  */
  setAnnualInsurance(annualInsurance) {
    if (!annualInsurance) return

    this.annualInsurance = Number(annualInsurance)
  }

  /**
   * Set the annual tax amount.
   * @param {number} annualTax
  */
  setAnnualTax(annualTax) {
    if (!annualTax) return

    this.annualTax = Number(annualTax)
  }

  /**
   * Set the annual interest amount.
   * @param {number} interest
  */
  setInterest(interest) {
    if (!interest) return

    this.interest = Number(interest)
  }

  /**
   * Set the loan amount.
   * @param {number} loan
  */
  setLoan(loan) {
    if (!loan) return

    this.loan = Number(loan)
  }

  /**
   * Set the years amount.
   * @param {number} years
  */
  setYears(years) {
    if (!years) return

    this.years = Number(years)
  }
}

export default Mortgage
