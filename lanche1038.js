var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ')

const lanche = parseInt(lines.shift())
const qtdLanche = parseInt(lines.shift())

const cachorroQuente = 4.0,
  xSalada = 4.5,
  xBacon = 5.0,
  torradaSimples = 2.0,
  refrigerante = 1.5

let valorTotal = 0.0

if (lanche === 1) {
  valorTotal = qtdLanche * cachorroQuente
} else if (lanche === 2) {
  valorTotal = qtdLanche * xSalada
} else if (lanche === 3) {
  valorTotal = qtdLanche * xBacon
} else if (lanche === 4) {
  valorTotal = qtdLanche * torradaSimples
} else if (lanche === 5) {
  valorTotal = qtdLanche * refrigerante
}

console.log(`Total: R$ ${valorTotal.toFixed(2)}`)
