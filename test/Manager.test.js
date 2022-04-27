const Manager = require('../lib/Manager')

describe("Manager class", () => {
    it("should create office number and name", () => {
        const manager = new Manager('');
        expect(manager.office).toEqual(1234);
        expect(manager.name).toEqual('Joe');

    });
});