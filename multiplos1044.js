var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ')

const A = parseInt(lines.shift())
const B = parseInt(lines.shift())

if (A % B === 0 || B % A === 0) {
  console.log('Sao Multiplos')
} else {
  console.log('Nao sao Multiplos')
}
