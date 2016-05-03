const countTheOnes = num => {
  'use strict'
  const extractOnes = (currentNum, count) => {
    if (currentNum > 0) {
      if (currentNum % 10 === 1) {
        count += 1
      }
      return extractOnes(Math.floor(currentNum / 10), count)
    }
    return count
  }
  return extractOnes(num, 0)
}

console.log(countTheOnes(467))
console.log(countTheOnes(81511))
console.log(countTheOnes(123))
