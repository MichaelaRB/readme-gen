const inquirer = require('inquirer');
const fs = require('fs');

const licenseChoices = ['AUR', 'Bower','Cocoapods','Conda - License','CPAN','CRAN/METACRAN','Crates.io','CTAN','DUB','Eclipse Marketplace','GitHub', 'GitLab', 'Greasy Fork', 'Hex.pm','NPM','Ore License','Packagist License','PyPI - License', 'REUSE Compliance','Weblate','None'];
const baseURL = "![License Badge](https://img.shields.io/badge";
const badgeURL = ["/license-Apache-blue", 
"/license-MIT-green", 
"license-MIT-333333",
"/license-MIT-green", 
"/license-lgpl__2__1-blue", 
"/license-MIT%20%2B%20file%20LICENSE-blue", 
"/license-MIT%2FApache--2.0-blue", 
"/license-ppl1.3c%2C%20ofl-lightgrey",
"/license-MIT-green",
"/license-GPL-blue",
"/license-MIT-green",
"/license-MIT%20License-Green",
"/license-MIT-green",
"/license-Apache%202-blue",
"/license-MIT-green",
"/license-MIT-green",
"/license-MIT-green",
"/license-BSD-green",
"/license-COMPLIANT-green",
"/license-MIT-blue",
"/no-license-red",
];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What licenses does your repository use?',
            choices: [
                {
                    name: 'AUR',
                    value: 0,
                },
                {   
                    name: 'Bower',
                    value: 1,
                }, 
                {
                    name: 'Cocoapods',
                    value: 2,
                }, 
                {
                    name: 'Conda - License',
                    value: 3,
                },
                {
                    name: 'CPAN',
                    value: 4,
                }, 
                {
                    name: 'CRAN/METACRAN',
                    value: 5,
                }, 
                {
                    name: 'Crates.io',
                    value: 6,
                }, 
                {
                    name: 'CTAN',
                    value: 7,
                },
                {
                    name: 'DUB',
                    value: 8,
                },
                {
                    name: 'Eclipse Marketplace',
                    value: 9,
                }, 
                {
                    name: 'GitHub',
                    value: 10,
                }, 
                {
                    name: 'GitLab',
                    value: 11,
                }, 
                {
                    name: 'Greasy Fork', 
                    value: 12,
                },
                {
                    name: 'Hex.pm',
                    value: 13,
                },
                {
                    name: 'NPM',
                    value: 14,
                },
                {
                    name: 'Ore License',
                    value: 15,
                },
                {
                    name: 'Packagist License',
                    value: 16,
                },
                {
                    name: 'PyPI - License',
                    value: 17, 
                },
                {
                    name: 'REUSE Compliance',
                    value: 18, 
                },
                {
                    name: 'Weblate',
                    value: 19,
                },
                {
                    name: 'None',
                    value: 20,
                }
            ],
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description about your project. What does it do? Why did you make it?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How does the user use your program?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions for installing the necessary files for this project.',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What are the guidelines for someone to contribute?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What tests can be run on this application?',
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

        let licenseBadge = badgeURL[data.license];
        const licenseURL = baseURL + licenseBadge + ')\n\n';
        
        const tableContents = "## Table of Contents\n [Description](#description)\n\n [Usage](#usage)\n\n [Installation](#installation)\n\n [Contribution Guidelines](#guidelines)\n\n [Tests](#tests)\n\n [Licenses](#licenses)\n\n [Questions](#questions)\n\n";
        const descriptionEl = `## Description\n ${data.description}\n\n`;
        const usageEl = `## Usage\n ${data.usage}\n\n`;
        const installEl = `## Installation\n ${data.installation}\n\n`;
        const guidelineEl = `## Guidelines\n ${data.guidelines}\n\n`;
        const testEl = `## Tests\n ${data.test}\n\n`;
        let licenseEl = `## Licenses\n This project is licensed under ${licenseChoices[data.license]}.\n\n`;
        if(data.license === 20) licenseEl = "\n\n";
        const questionEl = `## Questions\n Please direct any questions to:\n\n GitHub: ${data.userName}\n\n Email: ${data.email}`

        var docElements = titleEl + licenseURL + tableContents + descriptionEl + usageEl + installEl + guidelineEl + testEl + licenseEl + questionEl;

        fs.writeFile(fileName, docElements, (err) =>
            err ? console.log(err) : console.log("Your README file has been created successfully!"));
    });