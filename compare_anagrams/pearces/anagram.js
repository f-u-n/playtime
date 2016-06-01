'use strict';

const arrayize = (str) =>
  // convert string to array, remove spaces
  Array.prototype.slice.call(str.replace(/\s/g, ''));

const flatten = (arr) =>
  // sort and flatten an array to a string
  arr.sort().join('');

module.exports.compare = (str1, str2) =>
  // check that strings aren't the same but that the sorted/flattened strings are
  str1 !== str2 && flatten(arrayize(str1)) === flatten(arrayize(str2));
