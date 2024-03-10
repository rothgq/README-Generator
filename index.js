const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the intent of your project, how does it work, and/or what does it do?",
    },
    {
        type: "input",
        name: "install",
        message: "What dependancies are required for your project?",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Which license is associated with this project?",
        choices: ["Apache", "GNU v3.0", "MIT License", "Eclipse", "Boost Software License", "Mozilla Public License", "none"],
    },
    {
        type: "input",
        name: "usage",
        message: "Which languages or technologies were used with this project?",
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your professional e-mail?",
    },
    {
        type: "input",
        name: "contributors",
        message: "List all project contributors by Github username.",
    },
    {
        type: "input",
        name: "test",
        message: "List any required tests for the project.",
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile('./created/README.md', generateMarkdown({ ...responses }));
        console.log('README.md generation in progress');
    });
}

// Function call to initialize app
init();
