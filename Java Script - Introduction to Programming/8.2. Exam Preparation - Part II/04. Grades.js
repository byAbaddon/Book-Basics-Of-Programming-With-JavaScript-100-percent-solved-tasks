function grades([...arg]) {
  arg = [...arg.map(Number)]
  let studentsCount = arg.shift()
  let sumGrades = arg.reduce((a, b) => a + b)

  console.log(`Top students: ${(arg.filter(el => el >= 5.00).length / studentsCount * 100).toFixed(2)}%`)
  console.log(`Between 4.00 and 4.99: ${(arg.filter(el => el >= 4.00 && el <= 4.99).length / studentsCount * 100).toFixed(2)}%`)
  console.log(`Between 3.00 and 3.99: ${(arg.filter(el => el >= 3.00 && el <= 3.99).length / studentsCount * 100).toFixed(2)}%`)
  console.log(`Fail: ${(arg.filter(el => el >= 2.00 && el <= 2.99).length / studentsCount * 100 ).toFixed(2)}%`)
  console.log(`Average: ${(sumGrades / studentsCount).toFixed(2)}`)
}

//grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5'])
//grades(['6', '2', '3', '4', '5', '6', '2.2'])