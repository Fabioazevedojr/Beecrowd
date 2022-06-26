var input = require('fs').readFileSync('stdin', 'utf8')
// var lines = input.split('\n');

var num = parseInt(input)
if (num % 2 !== 0) {
  num++
} else {
  num = num + 2
}

console.log(num)
