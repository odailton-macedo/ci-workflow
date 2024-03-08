"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const people_1 = __importDefault(require("./people"));
describe("People unit tests", () => {
    it("should throw error when first name is empty", () => {
        expect(() => {
            const people = new people_1.default("", "Ann", 19);
        }).toThrowError("First name is required");
    });
    it("should throw error when last name is empty", () => {
        expect(() => {
            const people = new people_1.default("Marie", "", 19);
        }).toThrowError("Last name is required");
    });
    it("should generate an error when the age is less than 18 years old", () => {
        expect(() => {
            const people = new people_1.default("Marie", "Ann", 16);
        }).toThrowError("Age must be greater than or equal to 18 years old");
    });
    it("must return the person's full name", () => {
        const people = new people_1.default("Marie", "Ann", 19);
        expect(people.fullName()).toBe("Marie Ann");
    });
});
