// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

const numbersString = '0123456789';
const lowercaseString = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacterString = '!@#$%^&*()';
const uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function passwordLengthPrompt() {
  const passwordLength = window.prompt('Enter Password Length between 8-128');

  return passwordLength;
}

function lowercaseCharactersPrompt() {
  const lowercaseCharacters = window.prompt(
    "Would you like lowercase letters? Enter 'YES' or 'NO' to choose"
  );
  if (lowercaseCharacters === 'YES' || lowercaseCharacters === 'yes') {
    return lowercaseString;
  } else {
    return;
  }
}

function uppercaseCharactersPrompt() {
  const uppercaseCharacters = window.prompt(
    "Would you like uppercase letters? Enter 'YES' or 'NO' to choose"
  );
  if (uppercaseCharacters === 'YES' || uppercaseCharacters === 'yes') {
    return uppercaseString;
  } else {
    return;
  }
}

function specialCharactersPrompt() {
  const specialCharacters = window.prompt(
    "Would you like special letters? Enter 'YES' or 'NO' to choose"
  );
  if (specialCharacters === 'YES' || specialCharacters === 'yes') {
    return specialCharacters;
  } else {
    return;
  }
}

function numericCharactersPrompt() {
  const numericCharacters = window.prompt(
    "Would you like numeric letters? Enter 'YES' or 'NO' to choose"
  );
  if (numericCharacters === 'YES' || numericCharacters === 'yes') {
    return numbersString;
  } else {
    return;
  }
}

function generatePasswordCharacterString(passwordReq) {
  let passwordString = '';

  if (passwordReq.lowercase) {
    passwordString += lowercaseString;
  }
  if (passwordReq.uppercase) {
    passwordString += uppercaseString;
  }
  if (passwordReq.specialCharacters) {
    passwordString += specialCharacterString;
  }
  if (passwordReq.numeric) {
    passwordString += numbersString;
  }

  return passwordString;
}

function generatePassword(passwordString, passwordLength) {
  let password = '';

  for (let i = 1; i <= passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * passwordString.length);
    password += passwordString[randomIndex];
  }

  console.log(password, 'lol');
  return password;
}

// Write password to the #password input

function writePassword() {
  const passwordLength = passwordLengthPrompt();

  const passwordString = generatePasswordCharacterString({
    lowercase: lowercaseCharactersPrompt(),
    uppercase: uppercaseCharactersPrompt(),
    specialCharacters: specialCharactersPrompt(),
    numeric: numericCharactersPrompt(),
  });

  const password = generatePassword(passwordString, passwordLength);
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);