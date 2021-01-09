function drawFort2([arg1]){   //copy past
  let n = Number(arg1);
  //Draw first row
  console.log("/" + "^".repeat(Math.floor(n/2)) + "\\" + "_".repeat(2 * n - 4 - Math.floor(n/2) * 2 > 0 ?2 * n - 4 - Math.floor(n/2) * 2  : 0) + "/" + "^".repeat(Math.floor(n/2)) + "\\")
  //Draw mid part
  for(let i = 0; i < n-2; i++){
      if(i == n-3){
          console.log("|" + " ".repeat(Math.floor(n/2)+1) + "_".repeat(2 * n - 4 - Math.floor(n/2) * 2 > 0 ?2 * n - 4 - Math.floor(n/2) * 2  : 0) + " ".repeat(Math.floor(n/2)+1) + "|");
          
      } else {
          console.log("|" + " ".repeat(2 * n - 2) + "|");
      }
  }
  //Draw last row
  console.log("\\" + "_".repeat(Math.floor(n/2)) + "/" + " ".repeat(2 * n - 4 - Math.floor(n/2) * 2 ) + "\\" + "_".repeat(Math.floor(n/2)) + "/");
}

//drawFort2(['3'])
// drawFort2(['4'])
// drawFort2(['5'])
// drawFort2(['8'])

//-------------------------------------------(2)--------- WTF ??? Fucking Judge 

function drawFort([arg]) {
  let n = Number(arg)
  //top
  let roof = `/${'^'.repeat(n / 2)}\\`
  let roofMiddle;
  n > 4 ? roofMiddle = n / 2 : roofMiddle = 0
  console.log(`${roof}${'_'.repeat(roofMiddle)}${roof}`)

  //middle
  let dive;
  n < 5 ? dive = 2 : dive = 3
  for (let i = 0; i < n - dive; i++) {
    console.log(`|${' '.repeat(n * 2 - 2)}|`)
  }
  //middleDownPart
  if (n > 4) {
    console.log(`|${' '.repeat(n / 2 + 1)}${'_'.repeat(n/2)}${' '.repeat(n / 2 + 1)}|`)
  }

  //bottom 
  let floor = `\\${'_'.repeat(n / 2)}/`
  let floorMiddle;
  n > 4 ? floorMiddle = n / 2 : floorMiddle = 0
  console.log(`${floor}${' '.repeat(floorMiddle)}${floor}`)

}

// drawFort2(['3'])
// drawFort2(['4'])
// drawFort2(['5'])
// drawFort2(['8'])



