function minNumber(arg) {
  let min = Number.MAX_SAFE_INTEGER
  for (var i = 1; i <= arg[0]; i++) 
    if (+arg[i] < min) 
      min = +arg[i]
 
  return min
}

//console.log(minNumber([3, 0, 20, -30]))