const input = require('fs').readFileSync('stdin', 'utf8')

let valor = parseInt(input)

const cedulas = [100, 50, 20, 10, 5, 2, 1]

console.log(valor)

for (let cedula of cedulas) {
  let qtdCedulas = parseInt(valor / cedula)
  console.log(`${qtdCedulas} nota(s) de R$ ${cedula},00`)
  valor = valor % cedula
}
