const assert = require('assert');
const { Point } = require('../src/point.js');

describe('Point', () => {
  describe('equals', () => {
    it('should equate two point', () => {
      const point1 = new Point(0, 0);
      const point2 = new Point(0, 0);

      assert.ok(point1.equals(point2));
    });
    it('should return false if circles are not equal', () => {
      const point1 = new Point(0, 0);
      const point2 = new Point(2, 2);
      assert.equal(point1.equals(point2), false);
    });
  });

  describe('distanceBetween', () => {
    it('should give dstance between two points', () => {
      const point1 = new Point(0, 0);
      const point2 = new Point(5, 5);

      assert.equal(point1.distanceBetween(point2), 7.071);
    });

    it('should give dstance between two negative points', () => {
      const point1 = new Point(-1, -5);
      const point2 = new Point(5, -2);

      assert.equal(point1.distanceBetween(point2), 6.708);
    });
  });
});
