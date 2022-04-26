const Employee = require('../lib/Employee')

describe("Employee class", () => {
    it("should create id and name", () => {
        const employee = new Employee('');
        expect(employee.id).toEqual();
        expect(employee.name).toEqual('');

    });
});