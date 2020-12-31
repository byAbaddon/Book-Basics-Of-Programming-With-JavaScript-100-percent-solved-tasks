function thousandDaysOnEarth([inputData]) {
  let [year, month, day] = inputData.split('-').map(Number)
  let myDate = new Date(day, --month, year)
  myDate.setDate(myDate.getDate() + 1000)
  let [days, months, years] = [myDate.getDate(), myDate.getMonth() + 1, myDate.getFullYear()]
  days < 10 ? days = "0" + days : null
  months < 10 ? months = "0" + months : null
  return days + "-" + months + "-" + years
}