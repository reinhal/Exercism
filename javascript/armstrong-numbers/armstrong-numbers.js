//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (n) => {
  let numArr = [...`${n}`];
  let numDig = numArr.length; 
  let sum = (
    numArr.map(num => 
    Math.pow(num, numDig)))
    .reduce((tot, cur) => 
    tot + cur
  );
  return n === sum;
};
