var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ')

const horaInicio = parseInt(lines.shift())
const horaFim = parseInt(lines.shift())

let tempoJogo = 0

if (horaInicio > horaFim) {
  tempoJogo = 24 - horaInicio
  tempoJogo = tempoJogo + horaFim
} else if (horaFim > horaInicio) {
  tempoJogo = horaFim - horaInicio
} else if (horaFim === horaInicio) {
  tempoJogo = 24
}

console.log(`O JOGO DUROU ${tempoJogo} HORA(S)`)
