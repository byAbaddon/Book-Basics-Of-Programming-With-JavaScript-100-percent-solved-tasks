function sleepyTomCat(days) {
  let gameTomMin = 30000
  let ownerWorking = 63
  let ownerOff = 127

  let year = (365 - days)
  let yearToMin = (year * ownerWorking) + (days * ownerOff)
  let subtotal = Math.abs(gameTomMin - yearToMin)
  let hours = (Math.trunc(subtotal / 60))
  let min = subtotal % 60

  if (gameTomMin >= yearToMin) 
    return `Tom sleeps well\n${hours} hours and ${min} minutes less for play`
  return `Tom will run away\n${hours} hours and ${min} minutes more for play`
}

//console.log(sleepyTomCat(20))