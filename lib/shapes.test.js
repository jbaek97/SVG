const {Circle, Triangle, Square} = require('./shapes.js');
const fs = require('fs');

describe('Circle', () => {
    it('should take text and color and set that text on top of a circle with a background color of the color entered.', () => {
        const shape = new Circle();
        shape.setColor("blue");
        shape.setText("Me");
        const result = `<circle cx="150" cy="100" r="80" fill="blue"></circle>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Me</text>`;
        expect(shape.render()).toEqual(result);
    });
});

describe('Triangle', () => {
    it('should take text and color and set that text on top of a circle with a background color of the color entered.', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        shape.setText("Me");
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"></polygon>
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">Me</text>`)
    });
});

describe('Square', () => {
    it('should take text and color and set that text on top of a circle with a background color of the color entered.', () => {
        const shape = new Square();
        shape.setColor("blue");
        shape.setText("Me");
        expect(shape.render()).toEqual(`<rect x="50" y="0" width="200" height="200" fill="blue"></rect>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Me</text>`)
    });
});