const square = (number) => number * number;

const round = number => parseFloat(number.toFixed(3));

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceBetween(anotherPoint) {
    const xDeltaSq = square(anotherPoint.x - this.x);
    const yDeltaSq = square(anotherPoint.y - this.y);
    return round(Math.sqrt(xDeltaSq + yDeltaSq));
  }

  equals(anotherPoint) {
    return anotherPoint instanceof Point &&
      anotherPoint.x === this.x &&
      anotherPoint.y === this.y;
  }
}

exports.Point = Point;
exports.round = round;
