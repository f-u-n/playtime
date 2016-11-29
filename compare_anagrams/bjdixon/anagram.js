alphabetize = (str) => str.split('').sort().filter((c) => c.match(/\w/)).join('');

module.exports.compare = (str1, str2) => str1 !== str2 && alphabetize(str1) === alphabetize(str2);
