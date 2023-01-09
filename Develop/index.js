// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
       type: "input", 
       name: "title", 
       message: "What is the title of your project?"
    },
    {
        type: "input", 
        name: "description", 
        message: "What description of your project?"
    },
    {
        type: "input", 
        name: "motivation", 
        message: "What was the motivation for your project?"
    },
    {
        type: "input", 
        name: "solution", 
        message: "What problem are you trying to solve with your project?"
    },
    {
        type: "input", 
        name: "learned", 
        message: "What did you learn while making your project?"
    },
    {
        type: "input", 
        name: "unique", 
        message: "What makes your project unique?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(generateMarkdown(answers))
      });
}

// Function call to initialize app
init();
