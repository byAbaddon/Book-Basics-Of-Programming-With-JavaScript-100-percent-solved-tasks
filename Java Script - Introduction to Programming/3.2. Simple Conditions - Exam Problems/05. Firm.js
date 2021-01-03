function firm([projectTime, days, workers]) {

  let workDays = days * 0.90
  let overtimeHours = workDays * workers * 2
  let workHours = workDays * workers * 8
  let totalHours = ~~(workHours + overtimeHours)

  if (projectTime <= totalHours)
    return `Yes!${totalHours - projectTime} hours left.`
  return `Not enough time!${projectTime - totalHours} hours needed.`
}

// console.log(firm([90, 7, 3])) //Yes 99x
// console.log(firm([50, 5, 2])) //Yes 40x