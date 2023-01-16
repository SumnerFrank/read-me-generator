// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    // Title block
    {
       type: "input", 
       name: "title", 
       message: "What is the title of your project?"
    },
    // About block
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
        name: "unique", 
        message: "What makes your project unique?"
    },
    // Credits and Languages
    {
        type: "checkbox",
        name: "language",
        message: "What languages did you utilize in this project?",
        choices: ["HTML", "CSS", "JavaScript", "Node", "JQuery", "Python", "SQL"]
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for this project:",
        choices: ["MIT", "Mozilla", 
        "Boost Software License 1.0", "Do What The F*ck You Want To Public License"]
        },
        {
            type: "input", 
            name: "gitHub", 
            message: "Please enter the link to your GitHub:"
        },
        {
            type: "input", 
            name: "email", 
            message: "Please enter your email address:"
        },
];


// // TODO: Create a function to write README file


// TODO: Create a function to initialize app


function init() {
    inquirer.prompt(questions).then((answers) => {
      fs.writeFile(
        "README.md",
        generateMarkdown(answers),
        (err) => err ? console.log(err) : console.log("Successfully generated README.md")

      );
    });
  }

// Function call to initialize app
init();
