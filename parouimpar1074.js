var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const cont = lines.shift()

for (let i = 0; i < cont; i++) {
  var parOuImpar = lines.shift()
  if (parOuImpar % 2 === 0 && parOuImpar > 0) {
    console.log('EVEN POSITIVE')
  } else if (parOuImpar % 2 === 0 && parOuImpar < 0) {
    console.log('EVEN NEGATIVE')
  } else if (parOuImpar % 2 !== 0 && parOuImpar > 0) {
    console.log('ODD POSITIVE')
  } else if (parOuImpar % 2 !== 0 && parOuImpar < 0) {
    console.log('ODD NEGATIVE')
  } else {
    console.log('NULL')
  }
}
