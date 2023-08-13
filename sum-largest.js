const sumLargestNumbers = function (data) {
  if (data.length < 2) {
    return undefined;
  }

  let largest = data[0];
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largest) {
      largest = data[i]
    }
  }

  let secondLargest = data[0];
  for (let i = 0; i < data.length; i++) {
    if (data[i] > secondLargest && data[i] !== largest) {
      secondLargest = data[i];
    }
  }

  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));