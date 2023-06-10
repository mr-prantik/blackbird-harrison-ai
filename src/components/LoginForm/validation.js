import * as EmailValidator from 'email-validator';

const hasSpecialChar = (str) => {
    return /[ `!@#$%^&()_+\-=[\]{};':\\|,.<>/?~]/.test(str);
}

const hasNumber = (str) => {
    return /\d/.test(str);
}

const hasLowerCase = (str) => {
    return str.toUpperCase() !== str;
}

const hasUpperCase = (str) => {
    return str.toLowerCase() !== str;
}


function ValidatePwd(text) {
    if(text.length < 8) 
        return "Password should be of 8 or more characters.";
    
    if(!hasLowerCase(text) || !hasUpperCase(text))
        return "Password should contain atleast 1 character of both uppercase and Lowercase.";

    if(!hasNumber(text))
        return "Password should contain atleast 1 digit character";

    if(!hasSpecialChar(text))
        return "Password should contain atleast 1 speacial character";

    return "";
}

function ValidateEmail(email) {
    return EmailValidator.validate(email);
}

export {
    ValidatePwd,
    ValidateEmail,
}