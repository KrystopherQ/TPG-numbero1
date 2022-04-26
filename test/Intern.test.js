const Intern = require('../lib/Intern')

describe("Intern class", () => {
    it("should create school and name", () => {
        const intern = new Intern('');
        expect(intern.school).toEqual('');
        expect(intern.name).toEqual('');

    });
});