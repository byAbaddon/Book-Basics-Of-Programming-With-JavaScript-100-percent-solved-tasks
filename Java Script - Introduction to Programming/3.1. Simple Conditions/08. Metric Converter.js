function metricConverter([num, arg1, arg2]) {
  const convertorObj = {
    'm' : 1,     
    'mm': 1000,
    'cm': 100,
    'mi': 0.000621371192,
    'in': 39.3700787,
    'km': 0.001,
    'ft': 3.2808399,
    'yd': 1.0936133
  }

  return num / convertorObj[arg1] * convertorObj[arg2]
}

// console.log(metricConverter(['12', 'km', 'ft']))
// console.log(metricConverter(['150', 'mi', 'in']))

