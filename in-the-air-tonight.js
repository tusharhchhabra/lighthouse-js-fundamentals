const checkAir = function (samples, threshold) {
  let dirtySampleCount = 0;

  for (const sample of samples) {
    if (sample === "dirty") {
      dirtySampleCount += 1;
    }
  }

  const fractionOfDirtySamples = dirtySampleCount / samples.length;

  return (fractionOfDirtySamples > threshold) ? "Polluted" : "Clean";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))