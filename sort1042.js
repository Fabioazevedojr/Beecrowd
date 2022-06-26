var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ')

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())
var C = parseInt(lines.shift())

if (A < B && A < C && B < C) {
  console.log(A)
  console.log(B)
  console.log(C)
} else if (A < B && B > C && A < C) {
  console.log(A)
  console.log(C)
  console.log(B)
} else if (A > B && B < C && A < C) {
  console.log(B)
  console.log(A)
  console.log(C)
} else if (A > B && B < C && A > C) {
  console.log(B)
  console.log(C)
  console.log(A)
} else if (A < B && B > C && A > C) {
  console.log(C)
  console.log(A)
  console.log(B)
} else if (A > B && B > C && A > C) {
  console.log(C)
  console.log(B)
  console.log(A)
}
console.log('')
console.log(A)
console.log(B)
console.log(C)
