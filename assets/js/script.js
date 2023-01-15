// Array of special characters to be included in password
let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
let upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// -------------

// Create variables for the password options (for the prompts)
// User inputted password length
let passwordLength = 0;
// User inputted special characters ( true / false )
let special = false;
// User inputted number characters ( true / false )
let number = false;
// User inputted lowercase characters ( true / false )
let lowercase = false;
// User inputted uppercase characters ( true / false )
let uppercase = false;

// Create an empty array to store the selected character types
let selectedCharacters = [];

// Create a variable to store the random generated characters to correct password length
let characters = "";

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt user to input a desired password length.
  passwordLength = prompt("Please enter your desired password length \n(must be a whole number between numbers 10 and 64)");

  // If the password length fits requirements, ask user about password characters.
  if (passwordLength >= 10 && passwordLength <= 64 && passwordLength % 1 === 0) {
    // Ask user if they want special characters
    special = confirm("Please specify if you would like special characters \n(OK = YES & Cancel = NO)");
    // Ask user if they want number characters
    number = confirm("Please specify if you would like numbers \n(OK = YES & Cancel = NO)");
    // Ask user if they want lowercase characters
    lowercase = confirm("Please specify if you would like lowercase letters \n(OK = YES & Cancel = NO)");
    // Ask user if they want uppercase characters
    uppercase = confirm("Please specify if you would like uppercase letters \n(OK = YES & Cancel = NO)");

    // If no character types are selected, alert user to try again.
    if (special === false && number === false && lowercase === false && uppercase === false) {
      alert("Whoops! You need to select at least one character type. Please try again.");
    }

    // If the password length doesn't fit requirements, alert user to try again.
  } else {
    alert("Whoops! The character(s) entered are invalid. Please try again.");
  }
}

// Function for getting the selected characters, and combining them to new array
function getSelectedCharacters(selected, arr) {
  if (selected === true) {
    selectedCharacters = selectedCharacters.concat(arr);
  }
  // Return new array of selected characters
  return selectedCharacters;
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Get a random index from an array
  let index = Math.floor(Math.random() * arr.length);

  //Return the random index
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
  // Call the password option function
  getPasswordOptions();

  // Call the selected characters function for special characters
  getSelectedCharacters(special, specialCharacters);
  // Call the selected characters function for numeric characters
  getSelectedCharacters(number, numericCharacters);
  // Call the selected characters function for lowercase characters
  getSelectedCharacters(lowercase, lowerCasedCharacters);
  // Call the selected characters function for uppercase characters
  getSelectedCharacters(uppercase, upperCasedCharacters);

  // Loop through random index generator and merge into characters array
  for (let i = 0; i < passwordLength; i++) {
    let random = getRandom(selectedCharacters);
    characters = characters.concat(random);
  }
  // return as string of characters
  return characters;
}

// Function to reset the variables when the generate password button is clicked a second time
function reset() {
  passwordLength = 0;
  special = false;
  number = false;
  lowercase = false;
  uppercase = false;
  selectedCharacters = [];
  characters = "";
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  reset();
  let password = generatePassword();

  // If atleast one character type is selected, the text area placeholder will change
  if (special === true || number === true || lowercase === true || uppercase === true) {
    let passwordText = document.querySelector('#password');

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);