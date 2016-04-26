// source: http://www.codewars.com/kata/53c94a82689f84c2dd00007d
function intToEnglish (num) {
  var english = '',
      maxNum = 10 * Math.exp(15),
      convert = {
        0: 'zero',
        1: 'one ',
        2: 'two ',
        3: 'three ',
        4: 'four ',
        5: 'five ',
        6: 'six ',
        7: 'seven ',
        8: 'eight ',
        9: 'nine ',
        10: 'ten ',
        11: 'eleven ',
        12: 'twelve ',
        13: 'thirteen ',
        14: 'fourteen ',
        15: 'fifteen ',
        16: 'sixteen ',
        17: 'seventeen ',
        18: 'eighteen ',
        19: 'nineteen ',
        20: 'twenty ',
        30: 'thirty ',
        40: 'forty ',
        50: 'fifty ',
        60: 'sixty ',
        70: 'seventy ',
        80: 'eighty ',
        90: 'ninety ',
      }

  function translate (value) {
    var remainder = 0
    if (convert[value]) {
      return convert[value]
    } else if (value < 100) {
      remainder = value % 10
      return convert[value - (remainder)] + convert[remainder]
    } else if (value < 1000) {
      remainder = value % 100
      return translate((value - (remainder)) / 100) + 'hundred ' + (remainder !== 0 ? translate(remainder) : '')
    } else if (value < 1000000) {
      remainder = value % 1000
      return translate((value - (remainder)) / 1000) + 'thousand ' + (remainder !== 0 ? translate(remainder) : '')
    } else if (value < 1000000000) {
      remainder = value % 1000000
      return translate((value - (remainder)) / 1000000) + 'million ' + (remainder !== 0 ? translate(remainder) : '')
    } else if (value < 1000000000000) {
      remainder = value % 1000000000
      return translate((value - (remainder)) / 1000000000) + 'billion ' + (remainder !== 0 ? translate(remainder) : '')
    } else if (value < 1000000000000000) {
      remainder = value % 1000000000000
      return translate((value - (remainder)) / 1000000000000) + 'trillion ' + (remainder !== 0 ? translate(remainder) : '')
    } else {
      remainder = value % 1000000000000000
      return translate((value - (remainder)) / 1000000000000000) + 'quadrillion ' + (remainder !== 0 ? translate(remainder) : '')
    }
  }

  return translate(num).trim()
}
