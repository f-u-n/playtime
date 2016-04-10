((times) => {

const divisible = (denominator) => (numerator) => !(numerator % denominator)
const divisibleBy3 = divisible(3)
const divisibleBy5 = divisible(5)

const fizzbuzz = (n) => {
  console.log(divisibleBy3(n) ? divisibleBy5(n) ? 'fizzbuzz' : 'fizz' : divisibleBy5(n) ? 'buzz' : n)
  if (n < times) {
    fizzbuzz(n + 1)
  }
}

fizzbuzz(1)

})(100)
