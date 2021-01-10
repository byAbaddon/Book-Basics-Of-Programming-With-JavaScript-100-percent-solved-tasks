//-------------------------------------------OMG---------------------- 
function enterEvenNumber(arg) {
  let i = 0
  let n = 0

  while (true) {
    n = +arg[i]

    if (n % 2 === 0) {
      console.log('Even number entered: ' + n)
      break;
    }
    console.log('The number is not even: ')
    i++
  }
}

//------------------------------(2)----------WTF ???-------------------

function enterEvenNumber(n) {
  do {
    console.log('The number is not even: ')
    n++
  } while (n & 1)

  console.log('Even number entered: ' + n)
}

//enterEvenNumber(7)




