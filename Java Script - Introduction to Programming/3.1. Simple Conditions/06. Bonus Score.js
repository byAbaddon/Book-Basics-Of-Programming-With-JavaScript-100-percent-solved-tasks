function bonusScore(num) {
  num = Number(num)
  let bonus = num
  num <= 100 ? num += 5 : num <= 1000 ? num *= 1.20 : num *= 1.10
  bonus % 2 === 0 ? num++ : bonus % 5 === 0 ? num += 2 : null

  return `${num - bonus}\n${num}`
}

// console.log(bonusScore(20))
// console.log(bonusScore(15875))