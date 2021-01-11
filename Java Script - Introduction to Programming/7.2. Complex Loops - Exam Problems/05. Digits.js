function digits(num) {
  num = +num
  let [n1, n2, n3] = num.toString().split('').map(Number)
  let nRow = n1 + n2
  let nCol = n1 + n3
  let collection = ''

  for (let i = 0; i < nRow; i++) {
    for (let j = 1; j <= nCol; j++) {
      num % 5 === 0 ? num -= n1 : num % 3 === 0 ? num -= n2 : num += n3
      collection += num + ' '
    }

    console.log(collection)
    collection = ''
  }
}



// digits('132')
// digits('376')