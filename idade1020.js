var input = require('fs').readFileSync('stdin', 'utf8')

var idadeDias = parseInt(input)

var idadeAnos = parseInt(idadeDias / 365)
idadeDias = idadeDias % 365
var idadeMeses = parseInt(idadeDias / 30)
var idadeDiasFinal = idadeDias % 30

console.log(`${idadeAnos} ano(s)`)
console.log(`${idadeMeses} mes(es)`)
console.log(`${idadeDiasFinal} dia(s)`)
