function fibonacci(n) {
  let [f1, f2] = [1, 1]

  for (i = 0; i <= n - 1; i++) {
    f1 += f2
    [f1, f2] = [f2, f1]
  }
  return f1
}

// console.log(fibonacci(5))