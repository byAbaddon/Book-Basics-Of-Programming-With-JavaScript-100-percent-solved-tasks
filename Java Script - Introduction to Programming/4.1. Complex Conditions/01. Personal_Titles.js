function personalTitles([age, gender]) {
  if (gender === 'm')
    return age < 16 ? 'Master' : 'Mr.'
  else
    return age < 16 ? 'Miss' : 'Ms.'
}


//console.log(personalTitles([19.7, 'f']))