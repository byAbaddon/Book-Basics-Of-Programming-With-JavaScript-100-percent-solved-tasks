function christmasTree(n) {

    for (i = n ; i >= 0; i--) {
      console.log(' '.repeat(i) + '*'.repeat(n-i) + ' | ' + '*'.repeat(n - i))
    }
}

// christmasTree(['4'])
