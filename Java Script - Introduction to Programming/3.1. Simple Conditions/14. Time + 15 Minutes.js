function addMinutes([h, m]) {
  let min = Number(m) + 15
  let date = new Date()
  date.setHours(h, min)
  let gh = date.getHours()
  let gm = date.getMinutes()

  return `${gh}:${gm < 10 ? '0' + gm : gm}`
}

// console.log(addMinutes([12, 49]))
