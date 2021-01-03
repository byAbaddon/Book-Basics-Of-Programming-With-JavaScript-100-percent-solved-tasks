function pipesInPool(arg) {
    let [volume, pipe1, pipe2, hours] = arg[0].split(`\n`).map(parseFloat)
    let water = (pipe1 + pipe2) * hours
    let pool = ~~(water / volume * 100)
    let p1 = ~~(pipe1 * hours / water * 100)
    let p2 = ~~(pipe2 * hours / water * 100)

    if (water > volume) 
        return `For ${hours} hours the pool overflows with ${+(water - volume).toFixed(8)} liters.`
    return `The pool is ${pool}% full. Pipe 1: ${p1}%. Pipe 2: ${p2}%.`
}

// console.log(pipesInPool(
//   [`1000
//     100
//     120
//     3`]))