const inquirer = require('inquirer');
const fs = require('fs');
const baseURL = "![License Badge](https://img.shields.io/badge";
const badgeURL = ["/aur/license/:packageName", 
"/bower/l/:packageName", 
"/cocoapods/l/:spec",
"/conda/l/:channel/:package", 
"/cpan/l/:packageName", 
"/cran/l/:packageName", 
"/crates/l/:crate", 
"/ctan/l/:library",
"/dub/l/:packageName",
"/eclipse-marketplace/l/:name",
"/github/license/:user/:repo",
"/gitlab/license/:project+",
"/greasyfork/l/:scriptId",
"/hexpm/l/:packageName",
"/npm/l/:packageName",
"/ore/l/:pluginId",
"/packagist/l/:user/:repo",
"/pypi/l/:packageName",
"/reuse/compliance/:remote+",
"/weblate/l/:project/:component?server=https%3A%2F%2Fhosted.weblate.org",
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
            choices: ['AUR', 'Bower','Cocoapods','Conda - License','CPAN','CRAN/METACRAN','Crates.io','CTAN','DUB','Eclipse Marketplace','GitHub', 'GitLab', 'Greasy Fork', 'Hex.pm','NPM','Ore License','Packagist License','PyPI - License', 'REUSE Compliance','Weblate','None',
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

        let licenseBadge = badgeURL[data.license];
        const licenseURL = baseURL + licenseBadge + ')\n\n';
        
        const tableContents = "## Table of Contents\n [Description](#description)\n\n [Usage](#usage)\n\n [Installation](#installation)\n\n [Contribution Guidelines](#guidelines)\n\n [Tests](#tests)\n\n [Licenses](#licenses)\n\n [Questions](#questions)\n\n";
        const descriptionEl = `## Description\n ${data.description}\n\n`;
        const usageEl = `## Usage\n ${data.usage}\n\n`;
        const installEl = `## Installation\n ${data.installation}\n\n`;
        const guidelineEl = `## Guidelines\n ${data.guidelines}\n\n`;
        const testEl = `## Tests\n ${data.test}\n\n`;
        let licenseEl = `## Licenses\n This project is licensed under ${data.license}.\n\n`;
        if(data.license.indexOf() === 20) licenseEl = '\n\n';
        const questionEl = `## Questions\n Please direct any questions to:\n\n GitHub: ${data.userName}\n\n Email: ${data.email}`

        var docElements = titleEl + licenseURL + tableContents + descriptionEl + usageEl + installEl + guidelineEl + testEl + licenseEl + questionEl;

        fs.writeFile(fileName, docElements, (err) =>
            err ? console.log(err) : console.log("Your README file has been created successfully!"));
    });