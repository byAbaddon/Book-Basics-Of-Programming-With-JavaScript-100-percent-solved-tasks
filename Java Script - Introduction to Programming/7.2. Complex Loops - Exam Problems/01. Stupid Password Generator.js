function stupidPasswordGenerator([...arg]) {
  let [num, letters] = [...arg.map(Number)]  
  let str = 'abcdefghijklmnopqrstuvwxyz';
  let arr = [];
 
    for (let a = 1; a < num ; a++) {
     for (let b = 1; b < num; b++) {
       for (let c = 0; c <  letters ; c++) {
         for (let d = 0; d < letters; d++) {
           for (let z = Math.max(a,b)+ 1; z <= num; z++) {
             arr.push(`${a}${b}${str[c]}${str[d]}${z}`)  
           }
          }
         }
       }
     }

     console.log(arr.join(' '))
}


// stupidPasswordGenerator(['3', '1'])


//--------------------------------------(2)--------------------------------------

function stupidPasswordGenerator([num, letters]) {
  [num, letters] = [+num, +letters]
  let result = ''
  for (let i = 1; i < num; i++) {
      for (let j = 1; j < num; j++) {
          for (let k = 97; k < letters + 97; k++) {
              for (let m = 97; m < letters + 97; m++) {
                  for (let l = Math.max(i, j) + 1; l <= num; l++) {
                      result += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(m)}${l}` + ' '
                  }
              }
          }
      }
  }

  console.log(result)
}

// stupidPasswordGenerator([2, 4])