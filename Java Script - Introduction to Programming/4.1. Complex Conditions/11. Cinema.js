function cinema([premiere, normal , discount]) {
  let chairs = normal * discount

  switch (premiere) {
    case 'Premiere': chairs *= 12.00; break
    case 'Normal':   chairs *= 7.50; break
    case 'Discount': chairs *= 5.00; break
  }
  
  return `${chairs.toFixed(2)} leva`
}

//console.log(cinema(['Normal', ' 21', '13']))

