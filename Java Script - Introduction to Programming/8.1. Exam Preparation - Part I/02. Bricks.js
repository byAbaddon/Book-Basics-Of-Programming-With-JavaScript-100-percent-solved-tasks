function bricks([...arg]) {
  let [bri, workers, car] = [...arg.map(Number)]

  let curs = bri / workers
  return Math.ceil(curs / car)
}

//console.log(bricks(['5', '12', '30']))
