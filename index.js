const inquirer = require('inquirer');
const fs = require('fs');
const baseURL = "https://img.shields.io/badge/";

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
        console.log(JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log("Test Successful!")
        );
    });