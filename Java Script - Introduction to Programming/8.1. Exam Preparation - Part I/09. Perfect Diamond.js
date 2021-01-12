function perfectDiamond(n) {
  n = +n

  if (n === 1)
    return ' '.repeat(n - 1) + '*' + ' '.repeat(n - 1)

  //top
  console.log(' '.repeat(n - 1) + '*' + ' '.repeat(n - 1));

  //before middle
  for (let i = 1; i <= n - 2; i++) {
    console.log(' '.repeat(n - i - 1) + ('*' + '-').repeat(i) + '*' + ' '.repeat(n - i - 1));
  }

  //middle
  console.log(('*' + '-').repeat(n - 1) + '*');


  //under middle
  for (let i = 1; i <= n - 2; i++) {
    console.log(' '.repeat(i) + ('*' + '-').repeat(n - i - 1) + '*' + ' '.repeat(i));
  }
  //bottom
  console.log(' '.repeat(n - 1) + '*' + ' '.repeat(n - 1));
}

//perfectDiamond(['5']);
//perfectDiamond(['1']);