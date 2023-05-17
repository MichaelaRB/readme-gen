const inquirer = require('inquirer');
const fs = require('fs');
const baseURL = "https://img.shields.io/badge/";
const badgeURL = ["/aur/license/:packageName", "/bower/l/:packageName", "/cocoapods/l/:spec","/conda/l/:channel/:package"];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses does your repository use?',
            choices: ['AUR', 'Bower', 'Cocoapods', 'Conda - License', 'CPAN', 'CRAN/METACRAN', 'Crates.io', 'CTAN','DUB','Eclipse Marketplace', 'GitHub', 'GitLab', 'Greasy Fork', 'Hex.pm','NPM','Ore License','Packagist License', 'PyPI - License', 'REUSE Compliance', 'Weblate'],
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description about your project. What does it do? Why did you make it?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How does the user make use of your program?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How does one install your project?',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What are the guidelines for someone to contribute?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can tests be performed on this project?',
        },
        {
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])
    .then((data)=> {
        const fileName = "README.md";
        const titleEl = "# " + data.name + "\n\n";
        const tableContents = "## Table of Contents\n Description\n Installation\n Usage\n Contribution Guidelines\n Test Instructions\n Licenses\n Questions\n\n";
        const descriptionEl = `## Description\n ${data.description}\n\n`;
        const usageEl = `## Usage\n ${data.usage}\n\n`;
        const installEl = `## Installation\n ${data.installation}\n\n`;
        const guidelineEl = `## Guidelines\n ${data.guidelines}\n\n`;
        const testEl = `## Tests\n ${data.test}\n\n`;
        const licenseEl = `## Licenses\n ${data.license}\n\n`;
        const questionEl = `## Questions\n Please direct any questions to\n GitHub: ${data.userName}\n Email: ${data.email}`
        var docElements = titleEl + tableContents + descriptionEl + usageEl + installEl + guidelineEl + testEl + licenseEl + questionEl;
        fs.appendFile(fileName, docElements, (err) =>
            err ? console.log(err) : console.log("Your README file has been created successfully!"));
    });