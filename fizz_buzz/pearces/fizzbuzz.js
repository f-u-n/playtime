let numbers = [];

for (let i = 1, val; i <= 100; i++, val = '') {
  if (i % 3 === 0)
    val = 'fizz';
  if (i % 5 === 0)
    val += 'buzz';
  if (!val)
    val = i;
  numbers.push(val);
}
console.log(numbers);
