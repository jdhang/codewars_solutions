// source: http://www.codewars.com/kata/51c8e37cee245da6b40000bd/solutions/javascript
function stripComments (input, markers) {
  return input.replace(new RegExp('(, [' + markers.join('') + '].+)|( [' + markers.join('') + '].+)', 'g'), '')
}
