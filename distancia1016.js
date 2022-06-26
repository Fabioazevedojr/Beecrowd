var input = require('fs').readFileSync('stdin', 'utf8')

var distancia = parseInt(input)
var tempo = distancia * 2

console.log(tempo + ' minutos')
