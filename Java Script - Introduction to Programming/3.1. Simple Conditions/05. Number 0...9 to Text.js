function numbersToText(number) {
  const textNumbersList = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  return number <= 9 ? textNumbersList[number - 1] : 'number too big'
}

//console.log(numbersToText(1))
