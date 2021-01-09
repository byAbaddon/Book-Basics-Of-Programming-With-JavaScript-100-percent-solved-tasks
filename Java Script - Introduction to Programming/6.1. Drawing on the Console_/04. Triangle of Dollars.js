function triangleOfDollars(n) {

  for (let i = 0; i < n; i++) {
    let dollars = '$ '
    for (j = 0; j < i; j++) {
      dollars += '$ '
    }
    console.log(dollars)
  }
}

// triangleOfDollars(3)