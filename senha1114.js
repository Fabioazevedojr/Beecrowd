var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let senha = parseInt(lines.shift())

while (senha != 2002) {
  console.log(`Senha Invalida`)
  senha = parseInt(lines.shift())
}

console.log(`Acesso Permitido`)
