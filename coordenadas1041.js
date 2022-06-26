var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ')

const X = parseFloat(lines.shift())
const Y = parseFloat(lines.shift())

if (X > 0.0 && Y > 0.0) {
  console.log('Q1')
} else if (X < 0.0 && Y > 0.0) {
  console.log('Q2')
} else if (X < 0.0 && Y < 0.0) {
  console.log('Q3')
} else if (X > 0.0 && Y < 0.0) {
  console.log('Q4')
} else if (X === 0.0 && Y === 0.0) {
  console.log('Origem')
} else if ((X > 0.0 && Y === 0.0) || (X < 0.0 && Y === 0.0)) {
  console.log('Eixo X')
} else if ((X === 0.0 && Y > 0.0) || (X === 0.0 && Y < 0.0)) {
  console.log('Eixo Y')
}
