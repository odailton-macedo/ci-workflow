"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class People {
    constructor(firstName, lastName, age) {
        this.firstName = "";
        this.lastName = "";
        this.age = 18;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.validate();
    }
    validate() {
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
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}
exports.default = People;
