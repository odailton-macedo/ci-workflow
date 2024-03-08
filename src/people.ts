export default class People {
	private firstName = "";
	private lastName = "";
	private age = 18;

	constructor(firstName: string, lastName: string, age: number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;

		this.validate();
	}

	validate(): boolean {
		if (!this.firstName) {
			throw new Error("First name is required");
		}

		if (this.lastName.length === 0) {
			throw new Error("Last name is required");
		}

		if (this.age < 18) {
			throw new Error("Age must be greater than or equal to 18 years old");
		}
		return true;
	}

	fullName(): string {
		return this.firstName + " " + this.lastName;
	}

}

