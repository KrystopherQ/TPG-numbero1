const inquirer = require('inquirer')
const fs = require('fs')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const TPG = require('./src/TPG')

members = []
const managerQs = () => {
    inquirer
        .prompt([{
                type: 'input',
                message: "What is the Manager's name?",
                name: 'name',

            },
            {
                type: 'input',
                message: "What is the Manager's ID?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the Manager's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the Engineer's office number?",
                name: 'office',
            },
            {
                type: 'list',
                message: "Who would you like to add next?",
                name: 'team',
                choices: [
                    'Engineer',
                    'Intern',
                    'I am finished',
                ]
            }
        ])
        .then((managerAs) => {
            const manager = new Manager(managerAs.id, managerAs.name, managerAs.email, managerAs.office)
            members.push(manager)
            switch (managerAs.team) {
                case 'Engineer':
                    engineerQs();
                    break;
                case 'Intern':
                    internQs();
                    break;
                default:
                    writeToFile('./dist/index.html', TPG(members))
            }
        })
}

const engineerQs = () => {
    inquirer
        .prompt([{
                type: 'input',
                message: "What is the Engineer's name?",
                name: 'name',

            },
            {
                type: 'input',
                message: "What is the Engineer's ID?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the Engineer's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the Engineer's GitHub?",
                name: 'github',
            },
            {
                type: 'list',
                message: "Who would you like to add next?",
                name: 'team',
                choices: [
                    'Engineer',
                    'Intern',
                    'I am finished',
                ]
            }
        ])
        .then((engineerAs) => {
            const engineer = new Engineer(engineerAs.id, engineerAs.name, engineerAs.email, engineerAs.github)
            members.push(engineer)
            switch (engineerAs.team) {
                case 'Engineer':
                    engineerQs();
                    break;
                case 'Intern':
                    internQs();
                    break;
                default:
                    writeToFile('./dist/index.html', TPG(members))
            }
        })
}

const internQs = () => {
    inquirer
        .prompt([{
                type: 'input',
                message: "What is the Intern's name?",
                name: 'name',

            },
            {
                type: 'input',
                message: "What is the Intern's ID?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the Intern's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What school does the Intern attend?",
                name: 'school',
            },
            {
                type: 'list',
                message: "Who would you like to add next?",
                name: 'team',
                choices: [
                    'Engineer',
                    'Intern',
                    'I am finished',
                ]
            }
        ])
        .then((internAs) => {
            const intern = new Intern(internAs.id, internAs.name, internAs.email, internAs.school)
            members.push(intern)
            switch (internAs.team) {
                case 'Engineer':
                    engineerQs();
                    break;
                case 'Intern':
                    internQs();
                    break;
                default:
                    writeToFile('./dist/index.html', TPG(members))
            }
        })
}

managerQs();

fs.writeFile('index.html', TPG, (err) =>
    err ? console.log(err) : console.log()
)