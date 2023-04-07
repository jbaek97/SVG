const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');


// const svgFile = ({text, color, shape}) = {
//     if(shape = 'circle') {
//         const newCircleLogo = `<circle cx="25" cy="75" r="20"/>`; 
//         fs.writeFile(`${text}Logo.svg`, newCircleLogo);
//     } else if(shape = 'triangle') {
//         const newTriangleLogo = `<polygon points="250,60 100,400 400,400"/>`;
//         fs.writeFile(`${text}Logo.svg`, newCircleLogo);
//     } else if(shape = 'square') 
// }
// const svgFile = ({text, color, shape}) = {

// }

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter 3 characters for your logo text:'
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter your choice of color keyword or hexadecimel number for your logo:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for your logo:',
            choices: ['circle', 'triangle', 'square'],
        },
    ])
    .then((selections) => {
        const text = selections.text;
        const color = selections.color;
        const shape = selections.shape;
        if (shape === 'circle') {
            const newCircleLogo = new Circle();
            newCircleLogo.setColor(color);
            newCircleLogo.setText(text);
            fs.writeFile(`./examples/${newCircleLogo.text}Logo.svg`, `<svg width="300" height="200">${newCircleLogo.render()}</svg>`, (err) =>
            err ? console.log(err) : console.log('New circle logo successfully made.'))
            return;
        } else if (shape ==='triangle') {
            const newTriangleLogo = new Triangle(text, color);
            newTriangleLogo.setColor(color);
            newTriangleLogo.setText(text);
            newTriangleLogo.render();
            fs.writeFile(`./examples/${newTriangleLogo.text}Logo.svg`, `<svg width="300" height="200">${newTriangleLogo.render()}</svg>`, (err) =>
            err ? console.log(err) : console.log('New triangle logo successfully made.'));
            return;
        } else if (shape === 'square') {
            const newSquareLogo = new Square(text, color);
            newSquareLogo.setColor(color);
            newSquareLogo.setText(text);
            fs.writeFile(`./examples/${this.text}Logo.svg`, `<svg width="300" height="200">${newSquareLogo.render()}</svg>`, (err) =>
            err ? console.log(err) : console.log('New square logo successfully made.'));
            return;
        } else {
            return;
        }
    })