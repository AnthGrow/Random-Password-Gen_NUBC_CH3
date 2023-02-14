
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // A ParseInt Method helps us choose an integer from the string the user enters in the initial prompt
  // A 'while loop' allows us to tell the user that they haven't met the criteria if what they enter... 
  // is "not a number" "or" is less than 8 characters "or" is more than 128 characters.
  var passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters."));
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128.");
    passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters."));
  }

  // sets variables for the elements of the password and equates them to the prompts the user will see
  var includeLowercase = confirm("Include lowercase letters in your password?");
  var includeUppercase = confirm("Include uppercase letters in your password?");
  var includeNumbers = confirm("Include numbers in your password?");
  var includeSpecial = confirm("Include special characters in your password?");


  // another while loop prompts the user to decide on the four variables above saying if all of the... 
  // variables are "Not" chosen, alert the user until they confirm
  while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("You must select at least one character type to include in your password.");
    includeLowercase = confirm("Include lowercase letters in your password?");
    includeUppercase = confirm("Include uppercase letters in your password?");
    includeNumbers = confirm("Include numbers in your password?");
    includeSpecial = confirm("Include special characters in your password?");
  }
  

  // password variable combines the variables above to simplify the code and then links it... 
  // to the textarea and password ID in the HTML document and scans the page for input there
  var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button scanning for a "click" and calling the writePassword function
generateBtn.addEventListener("click", writePassword);


// Generates a random password with the string the user entered and guided by the booleans the user set
// to choose from the four arrays of possible characters
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





//PSEUDO CODE FOR PASSWORD GEN

// I want a button that listens for a click and generates a prompt

// The prompt will first ask how many characters the user wants in their password

// The prompts will ask the user a boolean (true or false) for 4 questions - Do you want to use characters: [lowercase, uppercase, numbers, special characters]

// When all of these prompts are answered use the Math.random() function to parse the characters 

// Generate and display text