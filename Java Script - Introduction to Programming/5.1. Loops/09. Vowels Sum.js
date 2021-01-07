function vowelsSum([arg]) {
  let sum = 0
  const lettersObj = {'a': 1,'e': 2,'i': 3,'o': 4,'u': 5}
  
  for (const el of arg) {
    if (lettersObj.hasOwnProperty(el)) {
      sum += lettersObj[el]
    } 
  }
    
  return sum
}

//console.log(vowelsSum(['hello']))
