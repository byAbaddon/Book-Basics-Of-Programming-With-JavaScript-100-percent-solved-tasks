function histogram(arg) {
  arg = arg.map(Number)
  arg.shift()
  let p1 = (arg.filter(el => el < 200).length / arg.length * 100).toFixed(2)
  let p2 = (arg.filter(el => el >= 200 && el <= 399).length / arg.length * 100).toFixed(2)
  let p3 = (arg.filter(el => el >= 400 && el <= 599).length / arg.length * 100).toFixed(2)
  let p4 = (arg.filter(el => el >= 600 && el <= 799).length / arg.length * 100).toFixed(2)
  let p5 = (arg.filter(el => el >= 800).length / arg.length * 100).toFixed(2)

  return `${p1}%\n${p2}%\n${p3}%\n${p4}%\n${p5}%\n`
}

//console.log(histogram([53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]))
//console.log(histogram([3,1,2,999]))