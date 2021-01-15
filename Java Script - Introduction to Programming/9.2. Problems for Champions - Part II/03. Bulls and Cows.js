function bullsAndCows([...arg]) { 
    let [guessNumber, targetBulls, targetCows] = [...arg.map(Number)]

    let livestockList = []
    let solutionFound = false

    for (let digit1 = 1; digit1 <= 9; digit1++) {
        for (let digit2 = 1; digit2 <= 9; digit2++) {
            for (let digit3 = 1; digit3 <= 9; digit3++) {
                for (let digit4 = 1; digit4 <= 9; digit4++) {

                    let guessDigit1 = ~~(guessNumber / 1000) % 10
                    let guessDigit2 = ~~(guessNumber / 100) % 10
                    let guessDigit3 = ~~(guessNumber / 10) % 10
                    let guessDigit4 = ~~(guessNumber / 1) % 10

                    let digitToCheck1 = digit1
                    let digitToCheck2 = digit2
                    let digitToCheck3 = digit3
                    let digitToCheck4 = digit4

                    let currentBulls = 0
                    let currentCows = 0

                    if (digitToCheck1 == guessDigit1) {
                        currentBulls++
                        guessDigit1 = -1
                        digitToCheck1 = -2
                    }

                    if (digitToCheck2 == guessDigit2) {
                        currentBulls++
                        guessDigit2 = -1
                        digitToCheck2 = -2
                    }

                    if (digitToCheck3 == guessDigit3) {
                        currentBulls++
                        guessDigit3 = -1
                        digitToCheck3 = -2
                    }

                    if (digitToCheck4 == guessDigit4) {
                        currentBulls++
                        guessDigit4 = -1
                        digitToCheck4 = -2
                    }

                    if (digitToCheck1 == guessDigit2) {
                        currentCows++
                        guessDigit2 = -1
                    } else if (digitToCheck1 == guessDigit3) {
                        currentCows++
                        guessDigit3 = -1
                    } else if (digitToCheck1 == guessDigit4) {
                        currentCows++
                        guessDigit4 = -1
                    }

                    if (digitToCheck2 == guessDigit1) {
                        currentCows++
                        guessDigit1 = -1
                    } else if (digitToCheck2 == guessDigit3) {
                        currentCows++
                        guessDigit3 = -1
                    } else if (digitToCheck2 == guessDigit4) {
                        currentCows++
                        guessDigit4 = -1
                    }

                    if (digitToCheck3 == guessDigit1) {
                        currentCows++
                        guessDigit1 = -1
                    } else if (digitToCheck3 == guessDigit2) {
                        currentCows++
                        guessDigit2 = -1
                    } else if (digitToCheck3 == guessDigit4) {
                        currentCows++
                        guessDigit4 = -1
                    }

                    if (digitToCheck4 == guessDigit1) {
                        currentCows++
                        guessDigit1 = -1
                    } else if (digitToCheck4 == guessDigit2) {
                        currentCows++
                        guessDigit2 = -1
                    } else if (digitToCheck4 == guessDigit3) {
                        currentCows++
                        guessDigit3 = -1
                    }

                    if (currentBulls == targetBulls && currentCows == targetCows) {
                        livestockList.push(`${digit1}${digit2}${digit3}${digit4}`)
                        solutionFound = true
                    }
                }
            }
        }
    }

    if (!solutionFound) {
        console.log('No')
    } else {
        console.log(livestockList.join(' '))
    }
}

// bullsAndCows([1234, 3, 0]) /* 1134 1214 1224 1231 1232 1233 1235 1236 1237 1238 1239 1244 1254 1264 1274 1284 1294 1334 1434 1534 1634 1734 1834 1934 2234 3234 4234 5234 6234 7234 8234 9234 */
// bullsAndCows([1234, 3, 1]) /* No */