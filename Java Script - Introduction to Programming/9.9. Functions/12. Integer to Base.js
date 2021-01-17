function integerToBase([...arg]) {
    let [number, toBase] = [...arg.map(Number)]
    return number.toString(toBase)
}

// console.log(integerToBase([3, 2])) //11
// console.log(integerToBase([9, 7])) //12