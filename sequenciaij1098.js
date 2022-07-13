let j = 1,
  cont = 1

for (i = 0; i <= 2; cont++) {
  if (i === 0.0 || i === 1.0 || i >= 1.9) {
    console.log(`I=${i.toFixed(0)} J=${j.toFixed(0)}`)
  } else {
    console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}`)
  }
  j++
  if (cont === 3) {
    i = i + 0.2
    j = j - 3
    j = j + 0.2
    cont = 0
  }
}
