var input = require('fs').readFileSync('stdin', 'utf8')

var tempo = parseInt(input)

var horas = parseInt(tempo / 3600)
var tempo = tempo % 3600
var minutos = parseInt(tempo / 60)
var segundos = tempo % 60

console.log(`${horas}:${minutos}:${segundos}`)
