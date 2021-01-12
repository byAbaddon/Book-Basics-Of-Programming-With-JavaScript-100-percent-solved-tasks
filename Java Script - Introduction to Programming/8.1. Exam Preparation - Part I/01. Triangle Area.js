function triangleArea([...arg]) {
  let [x1, y1 , x2, y2 , x3, y3] = [...arg.map(Number)] 

  let a = x2 - x3
  let h = y2 -y1 
  let s = a * h / 2 

  console.log(Math.abs(s))
}

// triangleArea(['5', '-2', '6', '1', '1', '1'])
