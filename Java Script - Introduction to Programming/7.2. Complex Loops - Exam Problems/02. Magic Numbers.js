function magicNumbers(magicNum) {
    let resultList = []

    for (let one = 1; one <= 9; one++) {
        for (let two = 1; two <= 9; two++) {
            for (let three = 1; three <= 9; three++) {
                for (let four = 1; four <= 9; four++) {
                    for (let five = 1; five <= 9; five++) {
                        for (let six = 1; six <= 9; six++) {
                            if (one * two * three * four * five * six == magicNum) {
                                resultList.push(`${one}${two}${three}${four}${five}${six}`)
                            }
                        }
                    }
                }
            }
        }
    }

    return resultList.join(' ')
}

// console.log(magicNumbers(2))