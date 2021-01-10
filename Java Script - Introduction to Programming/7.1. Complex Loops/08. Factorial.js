//-----------------------------------------(1)------Recursion solution-----------100pts
function factorial(n) {
  n = +n //row for fucking Judge
  if (n === 1)
    return 1
  return (n * factorial(n - 1))
}

//console.log(factorial(5))

//-----------------------------------------(2)---- WTF ???  Fucking Judge   /runtime error/?
function factorial(n) {
  return Math.factorial(n)
}

//console.log(factorial(5))