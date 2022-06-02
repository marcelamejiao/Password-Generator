// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var minPassword = 8 ;
  var maxPassword = 128 ;
  var number = "1234567890";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var characteres = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Ask the user how long they want the password (8-128)
  var chosenLength = prompt ("Define the length of your password between " + minPassword + " and " + maxPassword + " characteres");

  // If the number is less than 8 or greater than 128, it is invalid. Indicate to user to "Please try again."
  if (chosenLength < minPassword || chosenLength > maxPassword) {
    window.alert("Please chose a number between " + minPassword + " and " + maxPassword + ".");
    return "Please try again.";
  }

  // Ask the user what characters do they want to include in the password
  var lowerLettersAnswer = window.confirm("Do you want to include lowercase letters?");
  var upperLettersAnswer = window.confirm("Do you want to include uppercase letters?");
  var numericAnswer = window.confirm("Do you want to include numeric characteres?");
  var specialCharacAnswer = window.confirm("Do you want to include special characteres?");

  //* if user does not include any of the criteria above, then indicate to user to "Please try again."
  if (lowerLettersAnswer === false && upperLettersAnswer === false && numericAnswer === false && specialCharacAnswer === false) {
    window.alert("Password declined, you must choose at least one criteria.");
    return "Please try again.";
  }

  // Add the types of characters that the user has decided they want to have included in their password 
  var totalListOfCharacters = '';
  if (lowerLettersAnswer) {
    totalListOfCharacters += lowerLetters;
  }
  if (upperLettersAnswer) {
    totalListOfCharacters += upperLetters;
  }
  if (numericAnswer) {
    totalListOfCharacters += number;
  }
  if (specialCharacAnswer) {
    totalListOfCharacters += characteres;
  }

  // How big is the pool of characters to make the password
  let totalLengthOfCharacters = totalListOfCharacters.length;

  var randomPassword = '';

  for(i=0; i<chosenLength; i++) {
    // Choose a random number between 0 and totalLengthOfCharacters
    var randomNumberLength = Math.floor(Math.random() * totalLengthOfCharacters);
    randomPassword += (totalListOfCharacters[randomNumberLength]);

  }
  return randomPassword;
}