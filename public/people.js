export default class People {
    constructor(firstName, lastName, age = 18) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.validate();
    }
    validate() {
        if (this.age < 18)
            throw new Error("Age must be greater than or equal to 18 years old");
        return true;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}
