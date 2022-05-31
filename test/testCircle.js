const assert = require('assert');
const { Circle } = require('../src/circle');

describe('Circle', () => {

  describe('equals', () => {
    it('should equate two circles', () => {
      const circle1 = new Circle({ x: 0, y: 0 }, 10);
      const circle2 = new Circle({ x: 0, y: 0 }, 10);

      assert.ok(circle1.equals(circle2));
    });

    it('should return false if circles are not equal', () => {
      const circle1 = new Circle({ x: 0, y: 0 }, 10);
      const circle2 = new Circle({ x: 0, y: 0 }, 1);

      assert.equal(circle1.equals(circle2), false);
    });
  });

  describe('area', () => {
    it('should give area of given circle', () => {
      const circle = new Circle({ x: 0, y: 0 }, 10);
      assert.equal(circle.area(), 314.159);
    });

    it('should give area of another circle with decimal radius', () => {
      const circle = new Circle({ x: 2, y: 0 }, 1.2);
      assert.equal(circle.area(), 4.524);
    });
  });

  describe('circumference', () => {
    it('should give circumference of circle', () => {
      const circle = new Circle({ x: 5, y: 5 }, 4);
      assert.equal(circle.circumference(), 25.133);
    });

    it('should give circumference of circle with decimal radius', () => {
      const circle = new Circle({ x: 0, y: 0 }, 2.4);
      assert.equal(circle.circumference(), 15.08);
    });
  });

  describe('encloses', () => {
    it('should return true if point is enclosed in circle', () => {
      const circle = new Circle({ x: 5, y: 5 }, 4);
      const point = { x: 2, y: 4 };
      assert.equal(circle.encloses(point), true);
    });

  });
});
