var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ')

const A = parseFloat(lines.shift())
const B = parseFloat(lines.shift())
const C = parseFloat(lines.shift())

let ladoMaior, ladoMedio, ladoMenor

if ((A > B && A > C && B > C) || (A === B && A > C) || (A > B && B === C)) {
  ladoMaior = A
  ladoMedio = B
  ladoMenor = C
} else if (
  (A < B && B > C && A > C) ||
  (A === B && A > C) ||
  (B > A && A === C)
) {
  ladoMaior = B
  ladoMedio = A
  ladoMenor = C
} else if (
  (A < B && B < C && A < C) ||
  (B === C && A < C) ||
  (C > A && B === A)
) {
  ladoMaior = C
  ladoMedio = B
  ladoMenor = A
} else if (
  (A > B && B < C && A < C) ||
  (B < C && A === C) ||
  (C > A && B === A)
) {
  ladoMaior = C
  ladoMedio = A
  ladoMenor = B
} else if (
  (B > A && C > A && B > C) ||
  (B < C && A === C) ||
  (C > A && B === A)
) {
  ladoMaior = B
  ladoMedio = C
  ladoMenor = A
} else {
  ladoMaior = A
  ladoMedio = B
  ladoMenor = C
}

if (ladoMaior >= ladoMedio + ladoMenor) {
  console.log('NAO FORMA TRIANGULO')
} else if (
  Math.pow(ladoMaior, 2) ===
  Math.pow(ladoMedio, 2) + Math.pow(ladoMenor, 2)
) {
  console.log('TRIANGULO RETANGULO')
  if (
    (ladoMaior === ladoMedio && ladoMaior != ladoMenor) ||
    (ladoMaior === ladoMenor && ladoMaior != ladoMedio) ||
    (ladoMedio === ladoMenor && ladoMedio != ladoMaior)
  ) {
    console.log('TRIANGULO ISOSCELES')
  } else if (ladoMaior === ladoMedio && ladoMaior === ladoMenor) {
    console.log('TRIANGULO EQUILATERO')
  }
} else if (
  Math.pow(ladoMaior, 2) >
  Math.pow(ladoMedio, 2) + Math.pow(ladoMenor, 2)
) {
  console.log('TRIANGULO OBTUSANGULO')
  if (
    (ladoMaior === ladoMedio && ladoMaior != ladoMenor) ||
    (ladoMaior === ladoMenor && ladoMaior != ladoMedio) ||
    (ladoMedio === ladoMenor && ladoMedio != ladoMaior)
  ) {
    console.log('TRIANGULO ISOSCELES')
  } else if (ladoMaior === ladoMedio && ladoMaior === ladoMenor) {
    console.log('TRIANGULO EQUILATERO')
  }
} else if (
  Math.pow(ladoMaior, 2) <
  Math.pow(ladoMedio, 2) + Math.pow(ladoMenor, 2)
) {
  console.log('TRIANGULO ACUTANGULO')
  if (
    (ladoMaior === ladoMedio && ladoMaior != ladoMenor) ||
    (ladoMaior === ladoMenor && ladoMaior != ladoMedio) ||
    (ladoMedio === ladoMenor && ladoMedio != ladoMaior)
  ) {
    console.log('TRIANGULO ISOSCELES')
  } else if (ladoMaior === ladoMedio && ladoMaior === ladoMenor) {
    console.log('TRIANGULO EQUILATERO')
  }
}
