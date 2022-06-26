var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var [X1, Y1] = lines[0].split(' ').map(item => parseFloat(item))
var [X2, Y2] = lines[1].split(' ').map(item => parseFloat(item))

var distancia = Math.sqrt(Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2))

console.log(distancia.toFixed(4))
