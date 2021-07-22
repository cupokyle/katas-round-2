const checkAir = function(samples, threshold) {
  let dirts = samples.filter(sample => sample === "dirty").length;
  let msg;
  dirts / samples.length < threshold ? msg = "Clean" : msg = "Polluted";
  return msg;
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
));