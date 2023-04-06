const fs = require('fs');

class circle {
    constructor(text, color) {
        this.text = text;
        this.color = color;
        this.height = 300;
        this.width = 200;
    }
    createCircle() {
        const code = 
        `<svg width="300" height="200">
            <circle cx="25" cy="75" r="20" fill="${this.color}"/>
        </svg>`;
        fs.writeFile(`${text}Logo.svg`, code);
    }
}