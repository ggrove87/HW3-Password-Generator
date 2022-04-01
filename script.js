// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Write password to the #password input
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// loop it up! save yourself time

// concatinate an arrays of what they select array.concat(array2)
function generatePassword() {
  let lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numbersAvailable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let symbolsAvailable = ["!", "@", "#", "$", "%", "^", "&", "*"];
  let finalPassword = "";
  let userSelections = [""];

  let passwordLength = window.prompt("How many charactes would you like your password to be?");
  let passwordLowerCase = window.confirm("Would you like to use lower case letters?");
  let passwordUpperCase = window.confirm("Would you like to use upper case letters?");
  let passwordNumbers = window.confirm("Would you like to use numbers?");
  let passwordSplChars = window.confirm("Would you like to use special characters?");
  
if (passwordLowerCase === false && passwordUpperCase === false && passwordNumbers === false && passwordSplChars === false) {
  do  {
    window.alert("Please make a selection");
    passwordLowerCase = window.confirm("Would you like to use lower case letters?");
    passwordUpperCase = window.confirm("Would you like to use upper case letters?");
    passwordNumbers = window.confirm("Would you like to use numbers?");
    passwordSplChars = window.confirm("Would you like to use special characters?");
  }  while (passwordLowerCase === false && passwordUpperCase === false && passwordNumbers === false && passwordSplChars === false);
}
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number of 8 or more and 128 or less.")
  } else {
    if (passwordLowerCase === true) {
      userSelections = userSelections.concat(lowerCaseLetters);
    }
    if (passwordUpperCase === true) {
      userSelections = userSelections.concat(upperCaseLetters);
    }
    if (passwordNumbers === true) {
      userSelections = userSelections.concat(numbersAvailable);
    }
    if (passwordSplChars === true) {
      userSelections = userSelections.concat(symbolsAvailable);
    }

    for (let i = 0; i < passwordLength; i++) {
      let rgn = Math.floor(Math.random() * userSelections.length);
      finalPassword = finalPassword + userSelections[rgn];
      console.log(finalPassword);
    }
  }
  return finalPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// let RPSLetter = ["R", "P", "S"];
// let rgn = Math.floor(Math.random() * RPSLetter.length);
// let rgnLetter = RPSLetter[rgn];