const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')

function createTeam(members) {
    let card = []
    for (var i = 0; i < members.length; i++) {
        const membersArr = members[i]
        switch (membersArr.getRole()) {
            case 'Engineer':
                const engineer = new Engineer(membersArr.id, membersArr.name, membersArr.email, membersArr.github);
                card.push(genEngineer(engineer));
                break;
            case 'Intern':
                const intern = new Intern(membersArr.id, membersArr.name, membersArr.email, membersArr.school);
                card.push(genIntern(intern));
                break;
            case 'Manager':
                const manager = new Manager(membersArr.id, membersArr.name, membersArr.email, membersArr.office);
                card.push(genManager(manager));
                break;
        }
    }
    return card.join(``)
}

let genEngineer = (engineer) => {
    return `
    <div class="card text-white bg-info m-5" style="max-width: 18rem;">
    <div class="card-header">
        <h2>${engineer.getName()}</h2>
        <h3>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>ID: ${engineer.getId()}</p>
        <p>Email: ${engineer.getEmail()}</p>
        <p>Github: ${engineer.getGitHub()}</p>
    </div>
</div>
`
}
let genIntern = (intern) => {
    return `
    <div class="card text-white bg-info m-5" style="max-width: 18rem;">
    <div class="card-header">
        <h2>${intern.getName()}</h2>
        <h3>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>ID: ${intern.getId()}</p>
        <p>Email: ${intern.getEmail()}</p>
        <p>School: ${intern.getSchool()}</p>
    </div>
</div>
`
}
let genManager = (manager) => {
    return `
    <div class="card text-white bg-info m-5" style="max-width: 18rem;">
    <div class="card-header">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>ID: ${manager.getId()}</p>
        <p>Email: ${manager.getEmail()}</p>
        <p>Office Number: ${manager.getOffice()}</p>
    </div>
</div>
`
}

function TPG(members) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Template</title>
</head>

<body class='bg-dark'>
    <header>
        <div class="card mb-3 bg-primary">
            <div class="card-body">
                <h1 class="card-title text-center text-light">MY TEAM</h1>
            </div>
        </div>
    </header>
    <section class="d-flex flex-row align-content-center">
${createTeam(members)}
    </section>

</body>

</html>
    `
}

module.exports = TPG