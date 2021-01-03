function myFunc([str, a , b]) {
  switch (str) {
    case 'square': return ((a * a).toFixed(3))
    case 'rectangle': return ((a * b).toFixed(3))
    case 'circle': return ((a * a * Math.PI).toFixed(3))
    case 'triangle': return ((a * b / 2).toFixed(3))
    default: throw ('Error!')
  }
}

//console.log(myFunc(['circle', '6']))

