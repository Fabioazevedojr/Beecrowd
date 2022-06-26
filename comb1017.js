var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var tempoGasto = parseInt(lines.shift())
var velocidadeMedia = parseInt(lines.shift())

var distancia = tempoGasto * velocidadeMedia
var consumo = distancia / 12

console.log(consumo.toFixed(3))
