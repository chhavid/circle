class Point {
  constructor(x, y) {
    this.point = { x, y };
    // this.x = x;
    // this.y = y;
  }

  distanceBetween(anotherPoint) {
    const xDelta = anotherPoint.x - this.point.x;
    const yDelta = anotherPoint.y - this.point.y;
    const xDeltaSq = xDelta * xDelta;
    const yDeltaSq = yDelta * yDelta;
    return Math.sqrt(xDeltaSq + yDeltaSq).toFixed(3);
  }

  equals(anotherPoint) {
    return anotherPoint instanceof Point &&
      anotherPoint.point.x === this.point.x &&
      anotherPoint.point.y === this.point.y;
  }
}

exports.Point = Point;
