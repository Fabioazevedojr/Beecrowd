var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var X = parseInt(lines.shift())
var Y = parseFloat(lines.shift())

var consumo = X / Y

console.log(consumo.toFixed(3) + ' km/l')
