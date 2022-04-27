const Engineer = require('../lib/Engineer')

describe("Engineer class", () => {
    it("should create github and name", () => {
        const engineer = new Engineer('');
        expect(engineer.github).toEqual('mama');
        expect(engineer.name).toEqual('Mama');

    });
});