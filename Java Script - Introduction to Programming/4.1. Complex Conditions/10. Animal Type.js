function animalType([animal]) {
  let type = '';
  switch (animal) {
    case 'dog': type = 'mammal'; break;
    case 'crocodile': type = 'reptile';
    case 'tortoise': type = 'reptile';
    case 'snake': type = 'reptile'; break;
    default: return 'unknown'
  }

 return type
}

//console.log(animalType(['snake']))

