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