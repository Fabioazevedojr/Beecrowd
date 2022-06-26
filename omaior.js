var input = require('fs').readFileSync('stdin', 'utf8')

var [A, B, C] = input.split(' ').map(item => parseInt(item))

var maiorAb = (A + B + Math.abs(A - B)) / 2
var maiorC = (C + maiorAb + Math.abs(C - maiorAb)) / 2

console.log(maiorC + ' eh o maior')
