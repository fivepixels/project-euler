/*
 * PROBLEM 1: Multiples of 3 or 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below the provided parameter value `number`.
 */

function main(number: number): number {
  const isFloat = number % 1 !== 0;
  const isNegative = number <= 0;
  if (isFloat || isNegative) {
    throw Error("the number should be an integer");
  }

  const sumFor3 =
    3 * factorialForAddition(Math.floor(number / 3)) +
    (checkMaxNumIncluded(number, 3) ? -number : 0);
  const sumFor5 =
    5 * factorialForAddition(Math.floor(number / 5)) +
    (checkMaxNumIncluded(number, 5) ? -number : 0);
  const sumFor15 =
    15 * factorialForAddition(Math.floor(number / 15)) +
    (checkMaxNumIncluded(number, 15) ? -number : 0);

  return sumFor3 + sumFor5 - sumFor15;
}

function factorialForAddition(maxNum: number): number {
  return maxNum % 2 === 0
    ? (1 + maxNum) * (maxNum / 2)
    : (1 + maxNum) * Math.floor(maxNum / 2) + Math.ceil(maxNum / 2);
}

function checkMaxNumIncluded(maxNum: number, checkingNumber: number): boolean {
  return maxNum % checkingNumber === 0;
}

export default main;
