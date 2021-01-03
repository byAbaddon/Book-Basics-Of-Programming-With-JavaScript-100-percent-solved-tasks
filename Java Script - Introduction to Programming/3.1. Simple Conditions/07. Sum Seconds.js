function sumSeconds([...arg]) {
  let minSum = arg.reduce((a, b) => +a + +b)
  let date = new Date(0, 0, 0, 0, minSum)
  return String(date).split(' ')[4].slice(1, 5)
}

// console.log(sumSeconds([35, 45, 45]))
// console.log(sumSeconds([14, 12, 10]))