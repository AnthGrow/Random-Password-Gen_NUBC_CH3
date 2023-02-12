
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // A 'while' loop sets the condition to satisfy the password criteria and then alerts the user to choose password length 
  var passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters."));
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128.");
    passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters."));
  }

  // sets variables for the elements of the password and prompts the user to choose which variables
  var includeLowercase = confirm("Include lowercase letters in your password?");
  var includeUppercase = confirm("Include uppercase letters in your password?");
  var includeNumbers = confirm("Include numbers in your password?");
  var includeSpecial = confirm("Include special characters in your password?");

  // another while loop to alert the user to decide on the four variables above, 
  //saying while they are not specified the user must decide in order for the loop to execute
  while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("You must select at least one character type to include in your password.");
    includeLowercase = confirm("Include lowercase letters in your password?");
    includeUppercase = confirm("Include uppercase letters in your password?");
    includeNumbers = confirm("Include numbers in your password?");
    includeSpecial = confirm("Include special characters in your password?");
  }
  
  // password variable combines the variables above to simplify the code and then links it 
  // to the textarea and password ID in the HTML document and scans the page for input there
  var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password function
function generatePassword(length, lowercase, uppercase, numbers, special) {
  var password = "";
  var characters = "";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) characters += "0123456789";
  if (special) characters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\`~";

  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}



//PSEUDO CODE
