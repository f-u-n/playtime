'use strict';

const charFreq = (str) =>
  Array.from(str).reduce((counts, current) => {
    counts.hasOwnProperty(current) || (counts[current] = str.match(RegExp(current, 'g')).length);
    return counts;
  }, {});
