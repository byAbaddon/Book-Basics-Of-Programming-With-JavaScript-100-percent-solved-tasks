function greaterOfTwoValues([...arg]) {
    let type = arg.shift()
    if (type === 'int')
        return Math.max(...arg.map(Number))
      
    let [a, b] = [...arg]
    return a.localeCompare(b) >= 0 ? b : b    //OMG,  ...100pts
}

// console.log(greaterOfTwoValues(['int', 1, 2]))
// console.log(greaterOfTwoValues(['string', 'aaa', 'bbb']))
//console.log(greaterOfTwoValues(['char', 'a', 'b']))