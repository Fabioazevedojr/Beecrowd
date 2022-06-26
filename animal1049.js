var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

let palavraUm = String(lines.shift().trim())
let palavraDois = String(lines.shift().trim())
let palavraTres = String(lines.shift().trim())

if (palavraUm === 'vertebrado') {
  if (palavraDois === 'ave' && palavraTres === 'carnivoro') {
    console.log('aguia')
  } else if (palavraDois === 'ave' && palavraTres === 'onivoro') {
    console.log('pomba')
  } else if (palavraDois === 'mamifero' && palavraTres === 'onivoro') {
    console.log('homem')
  } else if (palavraDois === 'mamifero' && palavraTres === 'herbivoro') {
    console.log('vaca')
  }
} else if (palavraUm === 'invertebrado') {
  if (palavraDois === 'inseto' && palavraTres === 'hematofago') {
    console.log('pulga')
  } else if (palavraDois === 'inseto' && palavraTres === 'herbivoro') {
    console.log('lagarta')
  } else if (palavraDois === 'anelideo' && palavraTres === 'hematofago') {
    console.log('sanguessuga')
  } else if (palavraDois === 'anelideo' && palavraTres === 'onivoro') {
    console.log('minhoca')
  }
}
