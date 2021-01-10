function numberInRange(arg) {
  let i = 0
  let n = +arg[i]
  
   while (n < 1 || n > 100) {
     i++;
    console.log('Invalid number!')
     n = Number(arg[i])
   }
     console.log('The number is: ' + n)   
}

// numberInRange([109])