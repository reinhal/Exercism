//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2; 
    this.side3 = side3; 
  }

  kind() {
    if ((this.side1 + this.side2 + this.side3 < 0) ||
      (this.side1 + this.side2 <= this.side3 || this.side3 + this.side2 <= this.side1 || this.side1 + this.side3 <= this.side2) ||
      (this.side1 < 0 || this.side2 < 0 || this.side3 < 0)) {
        throw new Error("This is not a triangle!");
    }
  

    if ((this.side1 === this.side2) && ( this.side1 !== this.side3) || 
        (this.side1 === this.side3) && (this.side1 !== this.side2) || 
        (this.side3 === this.side2) && (this.side3!== this.side1)) {
        return "isosceles";
    } else if (this.side1 === this.side2 && this.side1 === this.side3 && this.side2 === this.side3) {
      return "equilateral";
    } else if (this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3) {
      return "scalene";
    }
  } 
}
