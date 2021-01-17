function mathPower([num, power]) {       // 100pts
   let result = num ** power
   if (String(result).indexOf('.') != -1)
      return Math.round(result * 1e15) / 1e15
   return result
}

//console.log(mathPower([2, 8]))

//------------------------------------------------(2)--------incorrect and misleading condition   90pts
function mathPower([num, power]) {  
   return num ** power
   
}

//console.log(mathPower([2, 8]))

//------------------------------------------------(3)--------incorrect and misleading condition   90pts
function mathPower([num, power]) {  
   return Math.pow(num, power)   
}

//console.log(mathPower([2, 8]))