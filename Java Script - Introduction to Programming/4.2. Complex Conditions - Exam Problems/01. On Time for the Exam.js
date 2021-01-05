function onTimeForTheExam([...arg]) {
  let [exHours, exMin, arHours, arMin] = [...arg.map(Number)]
  const [late, onTime, early] = ["Late", "On time", "Early"]
  let examTime = exHours * 60 + exMin
  let arrivalTime = arHours * 60 + arMin
  let totalMinutesDifference = arrivalTime - examTime
  let studentArrival = late;
  totalMinutesDifference < -30 ? studentArrival = early : totalMinutesDifference <= 0 ?  studentArrival = onTime : null
  
  let result = ''
  if (totalMinutesDifference !== 0) {
    let hoursDifference = Math.abs(~~(totalMinutesDifference / 60))
    let minutesDifference = Math.abs(totalMinutesDifference % 60)

    if (hoursDifference > 0) {
      result = hoursDifference + ":" + (minutesDifference > 9 ? minutesDifference : "0" + minutesDifference) + " hours"
    } else {
      result = minutesDifference + " minutes"
    }
    
    totalMinutesDifference < 0 ?  result += " before the start" : result += " after the start"
  }

  console.log(studentArrival)
  if (result) { console.log(result) }
}

// onTimeForTheExam([14, 00, 13, 55])
// onTimeForTheExam([11, 30, 8, 12])

