// Assignment Code
var generateBtn = document.querySelector("#generate");

/* prompt: length
--> must be between 8-128 chars

prompt: charater types
--> must select at least 1 

generate password */

function generatePassword() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = "1234567890";
  let special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
