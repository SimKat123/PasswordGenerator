// Assignment code here
if (window.confirm("Hi there! Would you like a new secure password?")) {
  window.confirm("Okay! Would you like UPPER case letters in your password?");
  window.confirm("What about LOWER case letters?");
  window.confirm("NUMBERS?");
  window.confirm("And lastly, SPECIAL CHARACTERS?");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
