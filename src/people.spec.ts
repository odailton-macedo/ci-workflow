import People from "./people";

describe("People unit tests", () => {
	it("should throw error when first name is empty", () => {
		expect(() => {
			const people = new People("", "Ann", 19);
		}).toThrowError("First name is required");
	});
  
	it("should throw error when last name is empty", () => {
		expect(() => {
			const people = new People("Marie", "", 19);
		}).toThrowError("Last name is required");
	});
  
	it("should generate an error when the age is less than 18 years old", () => {
		expect(() => {
			const people = new People("Marie", "Ann", 16);
		}).toThrowError("Age must be greater than or equal to 18 years old");
	});

	it("must return the person's full name", () => {
		const people = new People("Marie", "Ann", 19);
		expect(people.fullName()).toBe("Marie Ann");
	});
});


