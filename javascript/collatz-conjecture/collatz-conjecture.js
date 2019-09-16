//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  let steps = 0;

  if (n === 0 || n < 0) {
    throw new Error("Only positive numbers are allowed");
  }

  while (n > 1) {
    n = (n % 2 !== 0 ) ? (3 * n) + 1 : n/2;
    steps++;
  }

  return steps;
};
