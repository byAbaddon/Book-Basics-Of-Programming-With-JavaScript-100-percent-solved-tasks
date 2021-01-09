function stop([n]) {
  n = +n
  //draw top  
  console.log('.'.repeat(n + 1) + '_'.repeat(n * 2 + 1) + '.'.repeat(n + 1))
  //draw up part
  let add = 1
  for (i = 1; i <= n; i++) {
    console.log('.'.repeat((n + 1) - i) + '//' + '_'.repeat((((n + 1) * 2) - 4) + add) + '\\\\' + '.'.repeat((n + 1) - i))
    add += 2
  }
  //draw sing Stop
  if (n < 4) {
    console.log('//' + '_'.repeat(n) + 'STOP!' + '_'.repeat(n) + '\\\\')
  } else {
    console.log('//' + '_'.repeat(((n + n) * 2 - 5) / 2) + 'STOP!' + '_'.repeat(((n + n) * 2 - 5) / 2) + '\\\\')
    add += 2;
  };
  //draw bottom
  add = 1
  for (i = n; i >= 1; i--) {
    console.log('.'.repeat((n) - i) + '\\\\' + '_'.repeat((((n + n) * 2)) - add) + '//' + '.'.repeat((n) - i))
    add += 2
  }
}

stop([7])