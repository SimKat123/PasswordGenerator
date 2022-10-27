// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length= window.prompt("How many characters would you like in your passwords?");

  var uppercase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers= ["0", "1", "2", "3", "4", "5", "6" ,"7", "8", "9"];
  var specials= [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"];

  var input =[]

  if (length < 8 || length > 128) {
    window.alert ("The passowrd needs to be between 8 to 128 characters.");
    generatePassword() 
  } else {
    var uppercaseinput= window.confirm("Okay! Would you like UPPER case letters in your password?");
    var lowercaseinput= window.confirm("What about LOWER case letters?");
    var numberinput= window.confirm("NUMBERS?");
    var specialinput= window.confirm("And lastly, SPECIAL CHARACTERS?");

    // if else statement for when they pick their characters.
    if (uppercaseinput) {
      input
    } else (uppercaseinput)
    // Upper case randomization
      function uppercaserando () {
        
      }
    // Lower case radomization

    // Numbers randomization

    // Special Character randomization

  }
    // loop for repeat characters
return 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
