const square = function(x) {
  return x * x;
}

console.log(square(32));


const power = function(base, exponent) {
  let result = 1;
  for(let i = 0; i < exponent; i++) {
    result = result * base;
  }

  return result
}

console.log(power(3, 4));

const moinmoin = function(productionCount) {
  if(!productionCount) {
    return console.log('enter valid ammount')
  }

  const ingredients = function(sizeRequired, unit, size) {
    let requiredAmount = sizeRequired * productionCount;
    if(requiredAmount > 1) {
      unit += 's'
    }

    console.log(`${requiredAmount} ${unit} of ${size}`)
  }

  ingredients(5, 'litre', 'water');
  ingredients(0.4, 'gram', 'salt')
}

moinmoin(1)