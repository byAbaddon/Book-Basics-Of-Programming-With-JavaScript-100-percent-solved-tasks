function letterize([...arg]) {

    for (let i = 1; i < arg.length; i++) {
        let number = +arg[i]
        if (number > 999) console.log('too large')
        if (number < -999) console.log('too small')
        else if (Math.abs(number) > 99 && number < 1000) {
            if (number < 0) {
                console.log('minus ' + numberToText(number, 'negative'))
            } else {
                console.log(numberToText(number))
            }

        }
    }

    function numberToText(number, negative) {
        const [digit1, digit2, digit3] = String(Math.abs(number)).split('')

        const arrOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
            'seventeen', 'eighteen', 'nineteen'
        ]

        const arrTwo = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
            'seventy', 'eighty', 'ninety',
        ]

        let result = ''
        result += arrOne[digit1] + '-hundred and ' + ''

        num = Number(digit2 + digit3)
        if(num === 0)return arrOne[digit1] + '-hundred'
    
        if (num >= 0 && num < 10) {
            result += arrOne[digit3]
        } else if (num >= 0 && num <= 19) {
            result += arrOne[digit2 + digit3]
        } else if (num >= 20 && num <= 100) {
            if (digit3 == 0) {
                result += arrTwo[digit2]
            } else {
                result += arrTwo[digit2] + ' ' + arrOne[digit3]
            }
        }

        return result
    }
}


// letterize([2, 500, 123])
// letterize([3, 999, -420, 1020])
// letterize([4, 311, 418, 509, -9945])