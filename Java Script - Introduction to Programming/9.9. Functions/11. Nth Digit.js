function nthDigit([num, position]) {
    return num.split('').reverse()[+position - 1]
}

// console.log(nthDigit(['83746', '2']))