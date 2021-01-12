function pointOnSegment([...arg]) {
  let [left, right, point] = [...arg.map(Number)]

  if (point >= Math.min(left, right) && point <= Math.max(left, right)) {
    console.log('in')
  } else {
    console.log('out')
  }

  if (Math.abs(left - point) < Math.abs(right - point)) {
    console.log(Math.abs(left - point))
  } else {
    console.log(Math.abs(right - point))
  }

}

// pointOnSegment(['10', '5', '7'])