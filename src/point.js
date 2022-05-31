class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceBetween(anotherPoint) {
    // return new LineSegment(this.point, anotherPoint).length;
    const xDelta = anotherPoint.x - this.x;
    const yDelta = anotherPoint.y - this.y;
    const xDeltaSq = xDelta * xDelta;
    const yDeltaSq = yDelta * yDelta;
    return + Math.sqrt(xDeltaSq + yDeltaSq).toFixed(3);
  }

  equals(anotherPoint) {
    return anotherPoint instanceof Point &&
      anotherPoint.x === this.x &&
      anotherPoint.y === this.y;
  }
}

exports.Point = Point;
