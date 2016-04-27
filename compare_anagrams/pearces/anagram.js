'use strict';

const arrayize = (str) =>
  // convert string to array, remove spaces
  Array.prototype.slice.call(str.replace(/\s/g, ''));

module.exports.compare = (str1, str2) =>
  // check that strings aren't the same but that the sorted/flattened strings are
  str1 !== str2 && arrayize(str1).sort().join('') === arrayize(str2).sort().join('');
