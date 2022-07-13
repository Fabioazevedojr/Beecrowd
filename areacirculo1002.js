var input = require('fs').readFileSync('stdin', 'utf8')

const pi = 3.14159
const raio = parseFloat(input)
let soma = 0

function area() {
  return (soma = pi * Math.pow(raio, 2))
}

console.log(`A=${area().toFixed(4)}`)
