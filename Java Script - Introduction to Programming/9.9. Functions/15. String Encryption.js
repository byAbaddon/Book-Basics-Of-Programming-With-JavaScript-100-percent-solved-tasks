function encrypt([...arg]) {
    arg.shift()
    let result = ''

    for (let i = 0; i < arg.length; i++) {
        let currentLetterCode = arg[i].charCodeAt(0)
        let firstDigit = currentLetterCode.toString().slice(0, 1)
        let lastDigit = currentLetterCode.toString().slice(-1)
        let concatDigit = firstDigit + lastDigit
        let firstEncrypt = String.fromCharCode(currentLetterCode + Number(lastDigit))
        let secondEncrypt = String.fromCharCode(currentLetterCode - Number(firstDigit))

        result += firstEncrypt + concatDigit + secondEncrypt
    }

    return result
}

// console.log(encrypt(['7','S', 'o', 'f', 't', 'U', 'n', 'i', ]))