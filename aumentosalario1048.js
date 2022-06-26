var input = require('fs').readFileSync('stdin', 'utf8')

const salarioAtual = parseFloat(input)

let valorReajuste = 0,
  percentual = 0,
  novoSalario = 0

if (salarioAtual >= 0.0 && salarioAtual <= 400.0) {
  percentual = 15.0
  valorReajuste = (salarioAtual * percentual) / 100.0
  novoSalario = salarioAtual + valorReajuste
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
  console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
  console.log(`Em percentual: ${percentual} %`)
} else if (salarioAtual > 400.0 && salarioAtual <= 800.0) {
  percentual = 12.0
  valorReajuste = (salarioAtual * percentual) / 100.0
  novoSalario = salarioAtual + valorReajuste
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
  console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
  console.log(`Em percentual: ${percentual} %`)
} else if (salarioAtual > 800.0 && salarioAtual <= 1200.0) {
  percentual = 10.0
  valorReajuste = (salarioAtual * percentual) / 100.0
  novoSalario = salarioAtual + valorReajuste
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
  console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
  console.log(`Em percentual: ${percentual} %`)
} else if (salarioAtual > 1200.0 && salarioAtual <= 2000.0) {
  percentual = 7.0
  valorReajuste = (salarioAtual * percentual) / 100.0
  novoSalario = salarioAtual + valorReajuste
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
  console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
  console.log(`Em percentual: ${percentual} %`)
} else {
  percentual = 4.0
  valorReajuste = (salarioAtual * percentual) / 100.0
  novoSalario = salarioAtual + valorReajuste
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
  console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
  console.log(`Em percentual: ${percentual} %`)
}
