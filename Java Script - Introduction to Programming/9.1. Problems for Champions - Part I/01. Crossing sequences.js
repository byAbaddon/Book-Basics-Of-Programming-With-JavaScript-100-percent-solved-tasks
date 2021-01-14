function crossingSequences([...arg]) {
    let [tribonacciFirst, tribonacciSecond, tribonacciThird, spiralCurrent, spiralStep] = [...arg.map(Number)]
    let tribonacciNumbers = [tribonacciFirst, tribonacciSecond, tribonacciThird]

    let tribonacciCurrent = tribonacciThird
    while (tribonacciCurrent < 1000000) {
        tribonacciCurrent = tribonacciFirst + tribonacciSecond + tribonacciThird

        tribonacciNumbers.push(tribonacciCurrent)
        tribonacciFirst = tribonacciSecond
        tribonacciSecond = tribonacciThird
        tribonacciThird = tribonacciCurrent
    }

    let spiralNumbers = [spiralCurrent]
    let spiralCount = 0
        spiralStepMul = 1

    while (spiralCurrent < 1000000) {
        spiralCurrent += spiralStep * spiralStepMul
        spiralNumbers.push(spiralCurrent)
        spiralCount++
        if (spiralCount % 2 == 0) {
            spiralStepMul++
        }
    }

    let found = false;
    for (let i = 0; i < tribonacciNumbers.length; i++) {
        for (let j = 0; j < spiralNumbers.length; j++) {
            if (tribonacciNumbers[i] == spiralNumbers[j] && tribonacciNumbers[i] <= 1000000) {
                console.log(tribonacciNumbers[i])
                found = true
                break
            }
        }
        if (found) break
    }

    if (!found) console.log("No")
}

// crossingSequences([1, 2, 3, 5, 2])
// crossingSequences([13, 25, 99, 5, 2])