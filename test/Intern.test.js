const Intern = require('../lib/Intern')

describe("Intern class", () => {
    it("should create school and name", () => {
        const intern = new Intern('');
        expect(intern.school).toEqual('L');
        expect(intern.name).toEqual('L university');

    });
});