const urlEncode = function (text) {
  if (text.length === 0) {
    return "";
  }

  let result = "";

  let firstValidCharIndex = -1;
  let lastValidCharIndex = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      if (firstValidCharIndex < 0) {
        firstValidCharIndex = i;
      }
      lastValidCharIndex = i;
    }
  }

  for (let i = 0; i < text.length; i++) {
    if (i >= firstValidCharIndex && i <= lastValidCharIndex) {
      result += (text[i] === " ") ? "%20" : text[i];
    }
  }

  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));