function smartLily(arg) {    //[be black Ninja]//                     
  let [age, washingMachinePrice, toyPrice, toysCount, moneyFromBirthdays] = [...arg.map(Number), 0, 0]
  for (let i = 1; i <= age; i++) i % 2 == 1 ? toysCount++ : (moneyFromBirthdays += 10 * i / 2, moneyFromBirthdays--)
  let money = moneyFromBirthdays + toyPrice * toysCount
  return money >= washingMachinePrice ? `Yes! ${(money - washingMachinePrice).toFixed(2)}` : `No! ${(washingMachinePrice - money).toFixed(2)}`
}

//console.log(smartLily(['21', '1570.98', '3']))
