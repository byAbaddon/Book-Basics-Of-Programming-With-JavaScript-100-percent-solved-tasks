function change([bitcoinCount, chinaUanCount, commission]) {
  let bic = parseInt(1168)
  let chu = parseFloat(0.15)
  let usd = parseInt(1.76)
  let eur = parseFloat(1.95)

  let bitcoinOperation = bitcoinCount * 1168 
  let chinaUanOperation = (chinaUanCount * chu / usd) * 1.76
  let changeOperation = ((bitcoinOperation + chinaUanOperation) / eur)
  let commissionTax = ((changeOperation / 100) * commission)

  return (changeOperation - commissionTax).toFixed(2)
}

//console.log(change(['1', '5', '5']))
