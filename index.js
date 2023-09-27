// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your full name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: function (email) {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

      if (valid) {
        console.log("Valid Email");
        return true;
      } else {
        console.log("Please enter a valid email");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubUrl",
    message: "What is your github URL?",
  },
  {
    type: "input",
    name: "githubRepo",
    message: "What is your github repository URL?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter the title of your project.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "userStory",
    message: "Please enter your User Story:",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please describe your project.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "criteria",
    message: "What is your Acceptance Criteria?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter your Acceptance Criteria.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "problem",
    message: "What problem does it solve?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter what problems are solver by your project.");
      }
      return true;
    },
  },
  

  {
    type: "input",
    name: "install",
    message:
      "What are the installation requirements?",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please enter the required steps to install of your project.");
        }
        return true;
      },
  },
  {
    type: "input",
    name: "usage",
    message: "How do you run this application",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter how to run this application.");
      }
      return true;
    },
  },
  {
    type: "confirm",
    name: "test",
    message: "Would you like to apply with any test pattern?",
  },
  {
    type: "input",
    name: "testPattern",
    message: "Please specify what test pattern you are going to use.",
    when: function (answers) {
      return answers.test;
    },
  },
  {
    type: "confirm",
    name: "contributors",
    message: "Are there any contributors you would like to mention?",
  },
  {
    type: "input",
    name: "contributingInfo",
    message:
      " List your collaborators, if any, with links to their GitHub profile.",
    when: function (answers) {
      return answers.contributors;
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which open source license would you like to use? ",
    choices: ["MIT", "ISC", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.error(err)
      : console.log("New README file had been successfully created ");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answers) {
    const readMeContent = generateMarkdown(answers);
    writeToFile('./Generated-README/README.md', readMeContent);
  });
}

console.log(generateMarkdown);

// Function call to initialize app
init();
