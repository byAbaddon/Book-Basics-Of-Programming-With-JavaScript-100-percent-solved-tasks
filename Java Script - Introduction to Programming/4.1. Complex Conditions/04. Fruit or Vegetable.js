function fruitOrVegetable([...arg]) {
  let fruitList = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];
  let vegetableList = ['tomato', 'cucumber', 'pepper', 'carrot'];

  for (let i = 0; i < arg.length; i++) {
    if (fruitList.includes(arg[i])) {
      console.log('fruit')
    } else if (vegetableList.includes(arg[i])) {
      console.log('vegetable')
    } else {
      console.log('unknown')
    }
  }
}

//fruitOrVegetable(['banana', 'tomato', 'java'])