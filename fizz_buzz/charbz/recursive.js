function recursive (max, i) {
  var out = ' ', i = i || 0;
  if (i > max) return '';
  out += i % 3 === 0 ? 'fizz' : '';
  out += i % 5 === 0 ? 'buzz' : '';
  out += out === ' ' ? i : '';
  return out + recursive(max, ++i);
}

console.log(recursive(100));
