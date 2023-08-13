const conditionalSum = function(values, condition) {
  let sum = 0;
  let valuesToSum = [];

  if (condition === "even") {
    for (const num of values) {
      if (num % 2 === 0) {
        valuesToSum.push(num);
      }
    }
  } else if (condition === "odd") {
    for (const num of values) {
      if (num % 2 !== 0) {
        valuesToSum.push(num);
      }
    }
  }
  
  for (const num of valuesToSum) {
    sum += num;
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));