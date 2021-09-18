/*
  How to calculate return of investment?

  For a single starting amount it can be calculated by a simple formula:
  (1 + yearlyReturn)^years * startingAmount.

  If a person inputs a fixed amount each month it can be calculated by a formula:
  ((1 + monthlyReturn)^0 + (1 + monthlyReturn)^1 + (1 + monthlyReturn)^2 + ... + (1 + monthlyReturn)^monthsNumber) * monthlyAmount

  This formula wraps to:
  (1 + monthlyReturn)((1 + monthlyReturn)^(monthsNumber) - 1) / monthlyReturn * monthlyAmount
 */
export function calculate({ startingAmount, monthlyAmount, years, yearlyReturn, incomeTax }) {
  const monthlyReturn = Math.pow(1 + yearlyReturn, 1/12) - 1;
  const monthsNumber = years * 12;

  const resultFromStartingAmount = Math.pow(1 + yearlyReturn, years) * startingAmount;

  const resultFromMonthlyInvest = calculateMonthlyInvest(monthlyAmount, monthlyReturn, monthsNumber);
  const endingAmount = resultFromStartingAmount + resultFromMonthlyInvest;

  return {
    endingAmount: abandonPrecision(endingAmount, 0),
    endingMonthlyIncome: abandonPrecision(endingAmount * (1 - incomeTax) * monthlyReturn, 0),
  }
}

function abandonPrecision(number, precision) {
  return parseFloat(number.toFixed(precision));
}

function calculateMonthlyInvest(monthlyAmount, monthlyReturn, monthsNumber) {
  let partA = (1 + monthlyReturn);
  let partB = Math.pow(1 + monthlyReturn, monthsNumber) - 1;
  let partC = monthlyAmount / monthlyReturn;

  return abandonPrecision(partA * partB * partC, 2);
}