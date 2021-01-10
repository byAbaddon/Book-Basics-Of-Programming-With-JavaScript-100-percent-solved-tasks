function sumDigits([arg]) {
   return arg.split('').reduce((a,b) => +a + +b)
}

//console.log(sumDigits(['5634']))
