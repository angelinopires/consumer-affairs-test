const getPrincipalAndInterests = (interestRate, loanAmount, yearsOfMortgage) => {
  const months = 12
  const interestRatePerMonth = (interestRate / 100) / months

  return (
    (interestRatePerMonth * loanAmount)
    / (1 - (1 + interestRatePerMonth) ** (-yearsOfMortgage * months))
  )
}

const getTaxPrice = (annualTax, months = 12) => annualTax / months

const getInsurancePrice = (annualInsurance, months = 12) => annualInsurance / months

const getMontlyPayment = (
  principleAndInterests, tax, insurance,
) => principleAndInterests + tax + insurance

export {
  getPrincipalAndInterests, getTaxPrice, getInsurancePrice, getMontlyPayment,
}
