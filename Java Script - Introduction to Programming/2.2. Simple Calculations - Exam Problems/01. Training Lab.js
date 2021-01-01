function inputHall([width, len]) {
  let rows = Math.trunc(width * 100 / 120)
  let desk = Math.trunc(((len * 100) - 100) / 70)
  let allPlace = rows * desk - 3
  return allPlace
}

//console.log(inputHall([15, 8.9]))
//console.log(inputHall([8.4, 5.2]))