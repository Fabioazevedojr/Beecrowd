var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const lines1 = lines[0].split(' ')
const nota1 = parseFloat(lines1[0])
const nota2 = parseFloat(lines1[1])
const nota3 = parseFloat(lines1[2])
const nota4 = parseFloat(lines1[3])
const notaExame = Number(lines[1])

function media() {
  return (
    (nota1 * 2.0 + nota2 * 3.0 + nota3 * 4.0 + nota4 * 1.0) /
    (2.0 + 3.0 + 4.0 + 1.0)
  )
}

function mediaFinal() {
  return (parseFloat(media()) + notaExame) / 2.0
}

console.log(`Media: ${media().toFixed(1)}`)

if (media() >= 7.0) {
  console.log('Aluno aprovado.')
} else if (media() >= 5.0 && media() <= 6.9) {
  console.log('Aluno em exame.')
  console.log(`Nota do exame: ${notaExame.toFixed(1)}`)

  if (mediaFinal() >= 5.0) {
    console.log('Aluno aprovado.')
  } else {
    console.log('Aluno reprovado.')
  }
  console.log(`Media final: ${mediaFinal().toFixed(1)}`)
} else {
  console.log('Aluno reprovado.')
}
