let j = 7,
  cont = 1

for (i = 1; i <= 9; cont++) {
  console.log(`I=${i} J=${j}`)
  if (cont === 3) {
    i = i + 2
    j = j + 5
    cont = 0
  }
  j = j - 1
}
