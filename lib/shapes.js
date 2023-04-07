const fs = require('fs');

class Circle {
    constructor() {
        this.height = 300;
        this.width = 200;
    }
    setColor(newColor) {
        this.color = newColor;
    }
    setText(newText) {
        this.text = newText;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"></circle>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`;
    }
}; 
    
class Triangle {
    constructor() {
        this.height = 300;
        this.width = 200;
    }
    setColor(newColor) {
        this.color = newColor;
    }
    setText(newText) {
        this.text = newText;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"></polygon>
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`;
    }
};

class Square {
    constructor() {
        this.height = 300;
        this.width = 200;
    }
    setColor(newColor) {
        this.color = newColor;
    }
    setText(newText) {
        this.text = newText;
    }
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"></rect>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`;
    }
};


module.exports = {Circle, Triangle, Square}
