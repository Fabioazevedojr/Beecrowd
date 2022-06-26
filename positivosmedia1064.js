var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let positivos = lines.shift()

let numero = 0,
  i = 0,
  media = 0,
  soma = 0

for (i; i < 6; i++) {
  if (positivos > 0) {
    numero++
    soma = parseFloat(soma) + parseFloat(positivos)
  }
  positivos = lines.shift()
}

media = soma / numero

console.log(`${numero} valores positivos`)
console.log(`${media.toFixed(1)}`)
