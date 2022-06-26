var input = require('fs').readFileSync('stdin', 'utf8')

let salario = parseFloat(input)
let valorImposto = 0,
  diferencaSalario = 0.0

if (salario <= 2000.0) {
  console.log('Isento')
} else if (salario > 2000.0 && salario <= 3000.0) {
  salario = parseFloat(salario) - 2000.0
  valorImposto = salario * 0.08
  console.log(`R$ ${valorImposto.toFixed(2)}`)
} else if (salario > 3000.0 && salario <= 4500.0) {
  diferencaSalario = parseFloat(salario) - 3000.0
  valorImposto = 1000.0 * 0.08 + diferencaSalario * 0.18
  console.log(`R$ ${valorImposto.toFixed(2)}`)
} else {
  diferencaSalario = parseFloat(salario) - 4500.0
  valorImposto = 1000 * 0.08 + 1500 * 0.18 + diferencaSalario * 0.28
  console.log(`R$ ${valorImposto.toFixed(2)}`)
}
