var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ')

const horaInicio = parseInt(lines.shift())
const minutoInicio = parseInt(lines.shift())
const horaFim = parseInt(lines.shift())
const minutoFim = parseInt(lines.shift())

let horaInicioEmMinutos = horaInicio * 60 + minutoInicio,
  horaFimEmMinutos = horaFim * 60 + minutoFim,
  diferencaHoras = 0,
  diferencaMinutos = 0

if (horaInicioEmMinutos >= horaFimEmMinutos) {
  diferencaHoras = (horaFimEmMinutos - horaInicioEmMinutos + 24 * 60) / 60
  diferencaMinutos = (horaFimEmMinutos - horaInicioEmMinutos + 24 * 60) % 60
} else {
  diferencaHoras = (horaFimEmMinutos - horaInicioEmMinutos) / 60
  diferencaMinutos = (horaFimEmMinutos - horaInicioEmMinutos) % 60
}

console.log(
  `O JOGO DUROU ${parseInt(
    diferencaHoras
  )} HORA(S) E ${diferencaMinutos} MINUTO(S)`
)
