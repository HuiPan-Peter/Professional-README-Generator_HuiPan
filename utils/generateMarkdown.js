const licenseDoc = require('./license');
let year = new Date();


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(!license) {
        return '';
    }
    return `https://opensource.org/licenses/${license}`;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
    if (!license){
        return '';
    }
    return licenseDoc[license]
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers, license){
    let tableOfContents = ` ## Table of Contents`;
    if (answers.install) {
        tableOfContents += `\n1. [Description](#userStory)\n`;
    }
    if (answers.install) {
        tableOfContents += `\n2. [Installation](#installation)\n`;
    }
    if (answers.problem) {
        tableOfContents += `\n3. [Usage](#usage)\n`;
    }
    if (answers.contributors) {
        tableOfContents += `\n4. [Contributions](#contributions)\n`;
    }
    if (answers.test) {
        tableOfContents += `\n5. [Tests](#tests)\n`;
    }

        tableOfContents += `\n6. [Questions](#questions)\n`
    
    //generate README title and display license badge
    let readMe = `# ${answers.title}\n`;
    readMe += `\n${renderLicenseBadge(answers.license)}\n`;

    tableOfContents += `\n## Description\n ${answers.userStory}\n 
    Acceptance Criteria: ${answers.criteria}\n
    What problem does this application try to solve?: ${answers.problem}\n `;
    readMe += tableOfContents;
    if (answers.install != "") {
        readMe += `\n ## Installation\n${answers.install}\n`
        readMe += `\n [Github Repo Site]${answers.githubRepo}\n`
    }
    if (answers.usage != "") {
        readMe += `\n ## Usage\n ${answers.usage}\n`;
        // readMe += `\n What did you Learn: ${answers.learn}\n`
        // readMe += `\n Why did you build this project: ${answers.reason}\n`
    }
    if (answers.test === true) {
        readMe += `\n ## Tests\n ${answers.testPattern}`;
    }

  
    if (answers.contributors != "") {
        readMe += `\n ## Contributions\n ${answers.contributingInfo}\n`;
    }
    
    if (answers.install!= "") {
        readMe += `\n ## License\n ${renderLicenseBadge(answers.license)}\n
         ${renderLicenseLink(answers.license)}\n
        Licensed under the ${answers.license} License\n
        Copyright u00A9 [${year.getFullYear()}] [${answers.name}]
        ${renderLicenseSection(answers.license)}\n`;
    }

    readMe += `\n ## Questions\n If you have any questions about this application, Contact Me:\n
    Github: ${answers.githubUrl}\n
    Email:  ${answers.email}`;
    return readMe
};

module.exports = generateMarkdown;

