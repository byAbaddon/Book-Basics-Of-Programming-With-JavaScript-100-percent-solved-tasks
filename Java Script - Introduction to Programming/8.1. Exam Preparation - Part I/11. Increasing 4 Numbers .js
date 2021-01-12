function increasing4Numbers([...arg]) {
  let [a, b] = [...arg.map(Number)]
  let count = 0
  
  for (let i = a; i <= b; i++) {
    for (let j = i +1 ; j <= b; j++) {
      for (let m =  j +1 ; m <= b; m++) {
        for (let z =  m + 1; z <= b; z++) {
          console.log(`${i} ${j} ${m} ${z}`)
          count++
        }
      }
    }
  }
     if (count === 0) {
       console.log('No')
       
     }       
}

// increasing4Numbers(['10', '13'])