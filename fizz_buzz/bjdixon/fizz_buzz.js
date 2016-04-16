((times) => {

const divisible = (denominator) => (numerator) => !(numerator % denominator)
const divisibleBy3 = divisible(3)
const divisibleBy5 = divisible(5)
const maybePrint = (str) => (arg) => arg ? str : ''
const fizz = maybePrint('fizz')
const buzz = maybePrint('buzz')

const fizzbuzz = (n) => {
  if (n <= times) {
    return (fizz(divisibleBy3(n)) + buzz(divisibleBy5(n)) || n) + fizzbuzz(n + 1)
  }
  return ''
}

console.log(fizzbuzz(1))

})(100)
