function numberToText(num) {     
    const [digit1, digit2] = String(num).split('')
    
    const arrOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ]

    const arrTwo = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety', 
    ]

    

    num = Number(num)
    if (num <= -1 || num >= 101)return 'invalid number'
    if (num === 100 ) return 'one hundred'

    if (num >= 0 && num < 10) {
        return arrOne[digit1]
    } else if (num >= 0 && num <= 19) {
        return arrOne[digit1 + digit2]
    } else if (num >= 20 && num <= 100) {
        if (digit2 == 0)
            return arrTwo[digit1]
        return arrTwo[digit1] + ' ' + arrOne[digit2]
    }
}


// for (let i = 0; i <= 101; i++) {
//   console.log(numberToText(i))
// }


