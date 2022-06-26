var input = require('fs').readFileSync('stdin', 'utf8')

const X = parseInt(input)

for (let i = 1; i <= X; i++) {
  if (i % 2 != 0) {
    console.log(i)
  }
}
