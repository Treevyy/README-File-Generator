// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information?",
    },
    {
        type: "input",
        name: "technologies",
        message: "What technologies were used to create this project?",
    },
    {
        type: "input",
        name: "screenshots",
        message: "Provide the file path to the screenshots:",
    },
    {
        type: "input",
        name: "video",
        message: "Provide a link to the walkthrough video:",
    },
    {
        type: "input",
        name: "link",
        message: "Enter the URL link to your deployed application:",
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Add the names of everyone who particpated in this project:",
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions?",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('README.md was created successfully!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown)
    });
}

// Function call to initialize app
init();
