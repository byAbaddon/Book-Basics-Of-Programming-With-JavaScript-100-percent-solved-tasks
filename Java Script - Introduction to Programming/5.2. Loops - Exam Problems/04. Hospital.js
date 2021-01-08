function hospital(arg) {
  arg = arg.map(Number)
  let [doctors, patientsT, patientsU] = [7, 0, 0]

  for (let i = 1; i <= arg[0]; i++) {
    if (arg[i] > doctors) {
      patientsU += arg[i] - doctors
      patientsT += doctors
    } else {
      patientsT += arg[i]
    }

    if ((i + 1) % 3 === 0 && patientsU > patientsT)
      doctors++
  }

  return `Treated patients: ${patientsT}.\nUntreated patients: ${patientsU}.`
}

//console.log(hospital(['4', '7', '27', '9', '1']))