var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let primeiraLinha = lines.shift()
let diasInicio = primeiraLinha.split(' ')
let diaUm = diasInicio[0]
let diaInicio = parseInt(diasInicio[1])

let segundaLinha = lines.shift()
let horasInicio = segundaLinha.split(' ')
let horaInicio = parseInt(horasInicio[0])
let separadorUm = horasInicio[1]
let minutoInicial = parseInt(horasInicio[2])
let separadorDois = horasInicio[3]
let segundoInicial = parseInt(horasInicio[4])

let terceiraLinha = lines.shift()
let diasFinal = terceiraLinha.split(' ')
let diaDois = diasFinal[0]
let diaFinal = parseInt(diasFinal[1])

let quartaLinha = lines.shift()
let horasFim = quartaLinha.split(' ')
let horaFinal = parseInt(horasFim[0])
let separadorTres = horasFim[1]
let minutoFim = parseInt(horasFim[2])
let separadorQuatro = horasFim[3]
let segundosFinal = parseInt(horasFim[4])

let tempoEmSegundosInicio =
  segundoInicial +
  minutoInicial * 60 +
  horaInicio * 3600 +
  diaInicio * 3600 * 24

let tempoEmSegundosFinal =
  segundosFinal + minutoFim * 60 + horaFinal * 3600 + diaFinal * 3600 * 24

let tempoTotalEmSegundos =
  parseInt(tempoEmSegundosFinal) - parseInt(tempoEmSegundosInicio)

let resultado = parseInt(tempoTotalEmSegundos / (3600 * 24))
console.log(`${resultado} dia(s)`)
tempoTotalEmSegundos = tempoTotalEmSegundos % (3600 * 24)
resultado = parseInt(tempoTotalEmSegundos / 3600)
console.log(`${resultado} hora(s)`)
tempoTotalEmSegundos = tempoTotalEmSegundos % 3600
resultado = parseInt(tempoTotalEmSegundos / 60)
console.log(`${resultado} minuto(s)`)
tempoTotalEmSegundos = parseInt(tempoTotalEmSegundos % 60)
console.log(`${tempoTotalEmSegundos} segundo(s)`)
