const assert = require('assert');
const { Circle } = require('../src/circle');
const { Point } = require('../src/point');

describe('Circle', () => {

  describe('equals', () => {
    it('should equate two circles', () => {
      const circle1 = new Circle(new Point(0, 0), 10);
      const circle2 = new Circle(new Point(0, 0), 10);

      assert.ok(circle1.equals(circle2));
    });

    it('should return false if circles are not strictEqual', () => {
      const circle1 = new Circle(new Point(0, 0), 10);
      const circle2 = new Circle(new Point(0, 0), 1);

      assert.strictEqual(circle1.equals(circle2), false);
    });
  });

  describe('area', () => {
    it('should give area of given circle', () => {
      const circle = new Circle(new Point(0, 0), 10);
      assert.strictEqual(circle.area(), 314.159);
    });

    it('should give area of another circle with decimal radius', () => {
      const circle = new Circle(new Point(2, 5), 1.2);
      assert.strictEqual(circle.area(), 4.524);
    });
  });

  describe('circumference', () => {
    it('should give circumference of circle', () => {
      const circle = new Circle(new Point(3, 4), 4);
      assert.strictEqual(circle.circumference(), 25.133);
    });

    it('should give circumference of circle with decimal radius', () => {
      const circle = new Circle(new Point(0, 3), 2.4);
      assert.strictEqual(circle.circumference(), 15.08);
    });
  });

  describe('encloses', () => {
    it('should return true if point is enclosed in circle', () => {
      const circle = new Circle(new Point(2, 3), 4);
      const point = new Point(1, 2);
      assert.strictEqual(circle.encloses(point), true);
    });

    it('should return false if point is not enclosed in circle', () => {
      const circle = new Circle(new Point(2, 3), 4);
      const point = new Point(6, 7);
      assert.strictEqual(circle.encloses(point), false);
    });
  });

  describe('onCircumference', () => {
    it('should return true if point is on circumference', () => {
      const circle = new Circle(new Point(0, 0), 4);
      const point = new Point(0, 4);
      assert.strictEqual(circle.onCircumference(point), true);
    });

    it('should return false if point is inside circle', () => {
      const circle = new Circle(new Point(2, 3), 4);
      const point = new Point(1, 2);
      assert.strictEqual(circle.onCircumference(point), false);
    });

    it('should return false if point is outside circle', () => {
      const circle = new Circle(new Point(8, 9), 4);
      const point = new Point(1, 2);
      assert.strictEqual(circle.onCircumference(point), false);
    });
  });
});
