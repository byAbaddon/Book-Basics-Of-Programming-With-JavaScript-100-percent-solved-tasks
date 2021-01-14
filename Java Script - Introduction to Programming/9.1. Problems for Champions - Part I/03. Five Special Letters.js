function fiveSpecialLetters([...arg]) {
    let [firstNumber, secondNumber] = [...arg.map(Number)]
    let pattern = 'abcde'
    let result = ''

    for (let i1 = 0; i1 < 5; i1++) {
        for (let i2 = 0; i2 < 5; i2++) {
            for (let i3 = 0; i3 < 5; i3++) {
                for (let i4 = 0; i4 < 5; i4++) {
                    for (let i5 = 0; i5 < 5; i5++) {

                        let fullWord = pattern[i1] +
                            pattern[i2] +
                            pattern[i3] +
                            pattern[i4] +
                            pattern[i5]

                        let word = pattern[i1]

                        if (word.indexOf(pattern[i2]) == -1) word += pattern[i2]
                        if (word.indexOf(pattern[i3]) == -1) word += pattern[i3]
                        if (word.indexOf(pattern[i4]) == -1) word += pattern[i4]
                        if (word.indexOf(pattern[i5]) == -1) word += pattern[i5]

                        let weight = 0
                        for (let i = 0; i < word.length; i++) {
                            let multiplier = 0;
                            switch (word[i]) {
                                case 'a':
                                    multiplier = 5
                                    break;
                                case 'b':
                                    multiplier = -12
                                    break;
                                case 'c':
                                    multiplier = 47
                                    break;
                                case 'd':
                                    multiplier = 7
                                    break;
                                case 'e':
                                    multiplier = -32
                                    break;
                                default:
                                    break;
                            }

                            weight += multiplier * (i + 1)
                        }

                        if (weight >= firstNumber && weight <= secondNumber) {
                            result += fullWord + ' '
                        }
                    }
                }
            }
        }
    }

    if (result)
        return result.trim()
    return 'No'
}

// console.log(fiveSpecialLetters([40, 42]))