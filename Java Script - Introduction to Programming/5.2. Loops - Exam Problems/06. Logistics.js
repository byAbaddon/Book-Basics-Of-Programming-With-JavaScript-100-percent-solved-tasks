function logistics(arg) {
  arg = arg.map(Number)
  let n = arg[0]
  let [bus, truck, train] = [0, 0, 0]

  for (let i = 1; i <= n; i++) {
    arg[i] <= 3 ? bus += arg[i] : arg[i] <= 11 ? truck += arg[i] : train += arg[i]
}

  let total = bus + truck + train;
  let allSum =  (bus * 200 + truck * 175 + train * 120) / total

  console.log(allSum.toFixed(2))
  console.log((bus / total * 100).toFixed(2) + '%')
  console.log((truck / total * 100).toFixed(2) + '%')
  console.log((train / total * 100).toFixed(2) + '%')
}

//logistics(['5', '2', '10', '20', '1', '7']);
