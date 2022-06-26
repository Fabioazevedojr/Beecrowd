var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let numero = parseInt(lines.shift())
let numPositivos = 0,
  numPares = 0,
  numImpares = 0,
  numNegativos = 0

for (let i = 0; i < 5; i++) {
  if (numero % 2 === 0.0) {
    numPares++
    if (numero > 0) {
      numPositivos++
    } else if (numero < 0) {
      numNegativos++
    }
  } else if (numero % 2 != 0.0) {
    numImpares++
    if (numero > 0) {
      numPositivos++
    } else if (numero < 0) {
      numNegativos++
    }
  }
  numero = lines.shift()
}
console.log(`${numPares} valor(es) par(es)`)
console.log(`${numImpares} valor(es) impar(es)`)
console.log(`${numPositivos} valor(es) positivo(s)`)
console.log(`${numNegativos} valor(es) negativo(s)`)
