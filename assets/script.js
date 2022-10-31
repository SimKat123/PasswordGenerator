// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length= window.prompt("How many characters would you like in your passwords?");

  var uppercase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers= ["0", "1", "2", "3", "4", "5", "6" ,"7", "8", "9"];
  var specials= [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"];

  var input= [];

  if (length < 8 || length > 128) {
    window.alert ("The passowrd needs to be between 8 to 128 characters.");
    generatePassword() 
  } else {
    var uppercaseInput= window.confirm("Okay! Would you like UPPER case letters in your password?");
    var lowercaseInput= window.confirm("What about LOWER case letters?");
    var numberInput= window.confirm("NUMBERS?");
    var specialsInput= window.confirm("And lastly, SPECIAL CHARACTERS?");

    // if  statement for when they pick their characters.
    if (uppercaseInput) {
      input= uppercase;
    }

    if (lowercaseInput) {
      input= lowercase;
    }

    if (numberInput) {
      input= numbers;
    }

    if (specialsInput) {
      input= specials;
    }

    // alert if nothing is chosen
    if (!uppercaseInput, !lowercaseInput, !numberInput, !specialsInput) {
      window.alert ("You have to pick at least one criteria!");
      generatePassword()
    }

    // randomization
    for (var i=0; i < input.length; i++) {
      var random= Math.random() * input;
      password= input[random];
    }
  }
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);