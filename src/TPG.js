const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

function createTeam(members) {
    let card = []
    for (var i = 0; i < members.length; i++) {
        const membersArr = members[i]
        switch (membersArr.getRole()) {
            case 'Engineer':
                const engineer = new engineer(membersArr.id, membersArr.name, membersArr.email, membersArr.officeNumber);
                card.push(genEngineer(engineer));
                break;
            case 'Intern':
                const intern = new intern(membersArr.id, membersArr.name, membersArr.email, membersArr.github);
                card.push(genIntern(intern));
                break;
            case 'Manager':
                const manager = new manager(membersArr.id, membersArr.name, membersArr.email, membersArr.school);
                card.push(genManager(manager));
                break;
        }
    }
}