const charFreq = (str) => {
  return str.split('').reduce((obj, char) => {
    obj.hasOwnProperty(char) ? obj[char] += 1 : obj[char] = 1
    return obj
  }, {})
}
