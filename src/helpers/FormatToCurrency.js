const formatToCurrency = ({
  language = 'en-US',
  maximumFractionDigits = 2,
  notation = 'standard',
  value,
}) => {
  const currency = 'USD'

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
