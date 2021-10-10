/**
 * Format a value to USD currency.
 * @param {number} value
 * @returns {number} Formatted value as following $100,00.
 *
*/
const formatToCurrency = (value) => {
  const currency = 'USD'
  const language = 'en-US'
  const maximumFractionDigits = 2
  const notation = 'standard'

  const currencyFormater = new Intl.NumberFormat(language, {
    currency,
    maximumFractionDigits,
    minimumFractionDigits: 0,
    notation,
    style: 'currency',
  })

  return currencyFormater.format(value)
}

export default formatToCurrency
