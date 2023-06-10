import { validateEmail, validatePwd } from "./validation";

test("Password should be of 8 or more characters.", () => {
    expect(validatePwd("aaaa")).toBe("Password should be of 8 or more characters.");
});

test("Password should contain atleast 1 character of both uppercase and Lowercase.", () => {
    expect(validatePwd("xxxbbjbb")).toBe("Password should contain atleast 1 character of both uppercase and Lowercase.");
    expect(validatePwd("XXXBBJBB")).toBe("Password should contain atleast 1 character of both uppercase and Lowercase.");
});

test("Password should contain atleast 1 digit character", () => {
    expect(validatePwd("aaBCDDa")).toBe("Password should contain atleast 1 digit character");
});

test("Password should contain atleast 1 speacial character", () => {
    expect(validatePwd("Aabbcc1")).toBe("Password should contain atleast 1 speacial character");
});

test("Password that meet all requirements to be passed with no error message", () => {
    expect(validatePwd("Aabbhc@1")).toBe("");
});

test("Email should contain @", () => {
    expect(validateEmail("aaa")).toBe(false);
});

test("Email should contain correct domain", () => {
    expect(validateEmail("aaa@gmail.i")).toBe(false);
});

test("Valid Email should pass the case with no return mesaage", () => {
    expect(validateEmail("aaa@gmail.com")).toBe(true);
});