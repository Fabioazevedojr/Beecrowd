var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let positivos = lines.shift()

let numero = 0

for (let i = 0; i < 6; i++) {
  if (positivos > 0) {
    numero++
  }
  positivos = lines.shift()
}
console.log(`${numero} valores positivos`)
