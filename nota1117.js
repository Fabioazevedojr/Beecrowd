var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let nota = parseFloat(lines.shift())

let soma = 0,
  media = 0,
  i = 0

while (i < 2) {
  if (nota >= 0.0 && nota <= 10.0) {
    i++
    soma = soma + nota
  } else {
    console.log('nota invalida')
  }
  nota = parseFloat(lines.shift())
}
media = soma / 2

console.log(`media = ${media.toFixed(2)}`)
