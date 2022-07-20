// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// generate questions
const questions = [
    {
        message: 'What is the project title?',
        name: 'title'
    },
    {
        message: 'Please enter the author/s of this project',
        name: 'author'
    },
    {
        message: 'Please give a short description of your project.',
        name: 'description'
    },
    {
        message: 'How do you install your app?',
        name: 'installation'
    },
    {
        message: 'Github username?',
        name: 'github'
    },
    {
        message: 'Contact email?',
        name: 'email'
    },
    {
        message: 'choose a license',
        name: 'license',
        Choices: ['Apache 2.0', 'Boost Software', 'IBM Public', 'MIT', 'Mozilla Public']
    },
    {
        message: 'How is your project used?',
        name: 'usage'
    },
    {
        message: 'Tests for your project?',
        name: 'tests'
    },{
        message: 'How to contribute to your project?',
        name: 'contribute'
    },{
        message: 'Copywrite year?',
        name: 'year'
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            return generateMarkdown(data)
        })
        .then((final) => {
            fs.writeFile('README.MD', final, (error) => {
                error ? console.log(error) : console.log('Created!');;
            })
        })
}

// Function call to initialize app
init();
