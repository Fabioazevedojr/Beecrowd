const input = require('fs').readFileSync('stdin', 'utf8')

let valor = parseFloat(input)

const cedulas = [100, 50, 20, 10, 5, 2]
const moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01]

console.log('NOTAS:')
for (let cedula of cedulas) {
  let qtdCedulas = parseInt(valor / cedula)
  console.log(`${qtdCedulas} nota(s) de R$ ${cedula}.00`)
  valor = valor % cedula
}
console.log('MOEDAS:')
for (let moeda of moedas) {
  let qtdMoedas = parseInt(valor / moeda)
  console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`)
  valor = (valor % moeda) + 0.00001
}
