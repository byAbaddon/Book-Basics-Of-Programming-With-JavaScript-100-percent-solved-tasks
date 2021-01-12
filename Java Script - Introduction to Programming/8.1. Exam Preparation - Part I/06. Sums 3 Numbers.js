function sums3Numbers(arg) {
  let [n1, n2, n3] = [...arg.map(Number)]

  let sortedNumList = [...arg].sort((a, b) => a - b)

  if (n1 + n2 === n3 || n1 + n3 === n2 || n3 + n2 === n1) {
    console.log(`${sortedNumList[0]} + ${sortedNumList[1]} = ${sortedNumList[2]}`);
  } else {
    console.log('no');
  }
}

// sums3Numbers(['3', '5', '2'])
// sums3Numbers(['7', '3', '5'])
// sums3Numbers(['2', '2', '4'])
// sums3Numbers(['1', '1', '5'])