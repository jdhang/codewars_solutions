// source: http://www.codewars.com/kata/52a78825cdfc2cfc87000005
var calc = function (expression) {
  // evaluate `expression` and return result
  var tokens = expression.replace(/\s/g, '').split('')

  function get () {
    return tokens.shift()
  }

  function peek () {
    return tokens[0] || ''
  }

  function number () {
    var result = ''
    while (peek().match(/[0-9.]/)) {
      result += get()
    }
    return +result
  }

  function factor () {
    var result
    if (peek() === '(') {
      // consume '('
      get()
      result = evaluate()
      // consume ')'
      get()
    } else if (peek() === '-') {
      get()
      result = -factor()
    } else {
      result = number()
    }
    return result
  }

  function term () {
    var result = factor()
    while (peek() === '*' || peek() === '/') {
      if (get() === '*') {
        result *= factor()
      } else {
        result /= factor()
      }
    }
    return result
  }

  function evaluate () {
    var result = term()
    while (peek() === '+' || peek() === '-') {
      if (get() === '+') {
        result += term()
      } else {
        result -= term()
      }
    }
    return result
  }
  return evaluate()
}
