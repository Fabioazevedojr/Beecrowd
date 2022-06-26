var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ')

const A = parseFloat(lines.shift())
const B = parseFloat(lines.shift())
const C = parseFloat(lines.shift())

if (A < B + C && B < A + C && C < B + A) {
  let perimetro = A + B + C
  console.log(`Perimetro = ${perimetro.toFixed(1)}`)
} else {
  let areaTrapezio = ((A + B) * C) / 2
  console.log(`Area = ${areaTrapezio.toFixed(1)}`)
}
