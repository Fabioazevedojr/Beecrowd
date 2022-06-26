var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var pares = lines.shift()
let cont = 0
for (let i = 0; i < 5; i++) {
  if (pares % 2 === 0) {
    cont++
  }
  var pares = lines.shift()
}

console.log(`${cont} valores pares`)
