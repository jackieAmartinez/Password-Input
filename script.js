var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ["!", "@", "#", "$", "%", "&", "*"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

numbConfirm = confirm("Would you like to include numbers?");
charConfirm = confirm("Would you like to include letters?");
lowerConfirm = confirm("Would you like to include lowercase letters?");
upperConfirm = confirm("Would you like to include uppercase letters?");




// Write password to the #password input
function writePassword(word) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = word;

};

function Prompt() {
  var password;
  var passwordPrompt = prompt("It's time to make a password! Are you ready?? Enter yes or no.");
  passwordPrompt = passwordPrompt.toLowerCase();
  if (passwordPrompt === "yes") {
    password = generatePassword();
  }

  writePassword(password)
}


function generatePassword() {

  var passLength = false;

  while (!passLength) {
    var passwordLength = parseInt(prompt("How long will your password be? (It needs to be between 8-128 characters)"));
    if (!passwordLength) {
      alert("What number will you be choosing?");
      passwordLength = parseInt(prompt("How long will your password be? (It needs to be between 8-128 characters)"))
    }
    else if (passwordLength < 8 || passwordLength > 128 || passwordLength === 0) {
      alert("Your value must be between 8 and 128!");
      passwordLength = parseInt(prompt("How long will your password be? (It needs to be between 8-128 characters)"));
    }
    else {
      passLength = true;
    }
  }
}


generatePassword = (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase) => {
  const availableCharacters = [
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(haslowercaseLetters ? lowercaseLetters : []),
    ...(hasuppercaseLetters ? uppercaseLetters : []),
  ];

  let password = "";

  if (availableCharacters.length === 0) return "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }
  return password;
}
var passwordOutput = output.join();
console.log(passwordOutput);





// ??while loop - provided by class - 

// while (output.length < passwordLength) {

//   if (numbConfirm === true && output.length < passwordLength) {
//     output.push(Numbers[Math.floor(Math.random() * Numbers.length)]);
//   }

//   if (charConfirm === true && output.length < passwordLength) {
//     output.push(characters[Math.floor(Math.random() * characters.length)]);
//   }

//   if (upperConfirm === true && output.length < passwordLength) {
//     output.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
//   }

//   if (lowerConfirm === true && output.length < passwordLength) {
//     output.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
//   }
// }

// //to become the password, the output array > into a string

// var passwordOutput = output.join();
// console.log(passwordOutput);

// return passwordOutput;


// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword, false);

