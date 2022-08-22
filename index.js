// check number
const isOdd = (num) => {
  if (num % 2 === 0) return "Even"
  else return "Odd"
}

// splits num to array
// and sums all numbers
const sumAll = (num) => {
  const numsArr = Array.from(String(num), Number);
  return numsArr.reduce((sum, curr) => sum + curr);
}

const oddishOrEvenish = (num) => {
  return isOdd(sumAll(num))
}


const num1 = 4223
const num2 = 42
console.log(oddishOrEvenish(num1))