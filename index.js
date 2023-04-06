const inquirer = require('inquirer');
const fs = require('fs');

const svgFile = ({text, color, shape}) = {
    if(shape = 'circle') {
        const newCircleLogo = `<circle cx="25" cy="75" r="20"/>`; 
        fs.writeFile(`${text}Logo.svg`, newCircleLogo);
    } else if(shape = 'triangle') {
        const newTriangleLogo = `<polygon points="250,60 100,400 400,400"/>`;
        fs.writeFile(`${text}Logo.svg`, newCircleLogo);
    } else if(shape = 'square') 
}

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

    })