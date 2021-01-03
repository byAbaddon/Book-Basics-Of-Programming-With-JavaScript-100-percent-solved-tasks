function speedInfo(n) {
  return n <= 10 ? 'slow' :
    n > 10 && n <= 50 ? 'average' :
    n > 50 && n <= 150 ? 'fast' :
    n > 150 && n <= 1000 ? 'ultra fast' : 'extremely fast'
}

// console.log(speedInfo(19992.9))