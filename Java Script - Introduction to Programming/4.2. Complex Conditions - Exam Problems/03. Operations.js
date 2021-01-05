function operations([x, y, operator]) {
  const sum = eval(x + operator + y)
  if (sum === Infinity || sum !== sum) return `Cannot divide ${x} by zero`
  else if (operator == "/") return `${x} ${operator} ${y} = ${sum.toFixed(2)}`
  else if (operator == "%") return `${x} ${operator} ${y} = ${sum}`
  else return `${x} ${operator} ${y} = ${sum} - ${(sum & 1) == 0 ? 'even' : 'odd'}`
}

//console.log(operations([10, 12, '+']))