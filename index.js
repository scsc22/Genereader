const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./lib/generateMarkdown');

// Array of questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can users install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How can users use your project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users test your project?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// Function to write the generated README to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md successfully created!');
    }
  });
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions)
    .then((userInput) => {
      const generatedMarkdown = generateMarkdown(userInput);
      writeToFile('README.md', generatedMarkdown);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Start the application
init();
