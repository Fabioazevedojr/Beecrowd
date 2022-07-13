let j = 7

for (i = 1; i <= 9; i) {
  console.log(`I=${i} J=${j}`)
  j = j - 1
  if (j < 5) {
    i = i + 2
    j = 7
  }
}
