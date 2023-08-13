const numberOfVowels = function(data) {
  const vowels = ["a", "e", "i", "o", "u"]
  let vowelCount = 0;

  for (const char of data) {
    for (const vowel of vowels) {
      if (char === vowel) {
        vowelCount += 1;
      }
    }
  }

  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));