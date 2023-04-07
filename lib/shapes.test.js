const {Circle, Triangle, Square} = require('./lib/shapes.js');

describe('Circle', () => {
    it('should take text and color and set that text on top of a circle with a background color of the color entered.',
    () => {
        const shape = new Circle();
        shape.setColor("blue");
        shape.setText("Me");
        expect(shape.render()).toEqual(`<svg width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="blue"></circle>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Me</text>
        </svg>`)
    })
})
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// Constructor Arithmetic is imported.
const Arithmetic = require('../arithmetic.js');

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('sum', () => {
    it('should take two numbers and add them together', () => {
      const total = 4;
      const arithmetic = new Arithmetic();
      expect(arithmetic.sum(2, 2)).toEqual(total);
    });
  });
});
