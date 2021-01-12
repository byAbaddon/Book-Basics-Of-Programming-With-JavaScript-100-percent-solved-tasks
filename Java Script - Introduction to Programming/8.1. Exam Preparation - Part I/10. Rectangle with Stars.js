function rectangleWithStars(n) {

  //top
  console.log('%'.repeat(n * 2))

  //before middle
  for (let i = 0; i < n / 2 - 1; i++) {
    console.log('%' + ' '.repeat(n * 2 - 2) + '%')
  }

  //middle
  console.log('%' + ' '.repeat(n - 2) + '**' + ' '.repeat(n - 2) + '%')

  //after  middle
  for (let i = 0; i < n / 2 - 1; i++) {
    console.log('%' + ' '.repeat(n * 2 - 2) + '%')
  }

  //bottom
  console.log('%'.repeat(n * 2))
}

// rectangleWithStars(['2'])
// rectangleWithStars(['3'])