const { Point } = require('./point');

class Circle {
  constructor(point, radius) {
    this.point = point;
    this.radius = radius;
  }

  area() {
    return (Math.PI * this.radius * this.radius).toFixed(3);
  }

  circumference() {
    return (2 * Math.PI * this.radius).toFixed(3);
  }

  encloses(point) {
    const point1 = new Point(point.x, point.y);
    return this.radius > point1.distanceBetween(this.point);
  }

  equals(anotherCircle) {
    return anotherCircle instanceof Circle &&
      anotherCircle.radius === this.radius &&
      anotherCircle.point.x === this.point.x &&
      anotherCircle.point.y === this.point.y;
  }
}

exports.Circle = Circle;
