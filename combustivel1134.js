var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let x = input.split('\n').map(item => parseInt(item))
let alcool = 0,
  gasolina = 0,
  diesel = 0

for (let i = 0; ; i++) {
  if (x[i] === 1) {
    alcool++
  } else if (x[i] === 2) {
    gasolina++
  } else if (x[i] === 3) {
    diesel++
  } else if (x[i] === 4) break
}
console.log('MUITO OBRIGADO')
console.log(`Alcool: ${alcool}`)
console.log(`Gasolina: ${gasolina}`)
console.log(`Diesel: ${diesel}`)
