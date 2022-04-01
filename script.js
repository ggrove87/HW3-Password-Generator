// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordLength = window.prompt("How many charactes would you like your password to be?");
passwordLength = passwordLength + 0;
let passwordLowerCase = window.confirm("Would you like to use lower case letters?");
let passwordUpperCase = window.confirm("Would you like to use upper case letters?");
let passwordNumbers = window.confirm("Would you like to use numbers?");
let passwordSplChars = window.confirm("Would you like to use special characters?");
let userSelections = [""];


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
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number of 8 or more and 128 or less.")
  } else {
    if (passwordLowerCase === true && passwordUpperCase === true && passwordNumbers === true && passwordSplChars === true) {
      if (i = 0, passwordLength > i, i++) {
        userSelections = userSelections.concat(lowerCaseLetters, upperCaseLetters, numbersAvailable, symbolsAvailable);
        console.log()
        let rgn = Math.floor(Math.random() * userSelections.length);
        finalPassword = finalPassword + userSelections[rgn];
        console.log(finalPassword);
      }
    } else if (passwordLowerCase === true && passwordUpperCase === true && passwordNumbers === true && passwordSplChars === false) {
      userSelections.concat(lowerCaseLetters, upperCaseLetters, numbersAvailable)
    }

    Math.floor(Math.random())
  } 
  return finalPassword;
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// let RPSLetter = ["R", "P", "S"];
// let rgn = Math.floor(Math.random() * RPSLetter.length);
// let rgnLetter = RPSLetter[rgn];