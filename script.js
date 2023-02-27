// assignement code
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


  function generatePassword() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var symbols = ["!", "@", "#", "$", "%", "&", "*"];
    var availableCharacters = [numbers, symbols, lowercaseLetters, uppercaseLetters];

    var passwordLength = prompt("Please select the length of your password.");
    if (passwordLength === "") {
      alert("Please select the length of your password.")
      return
    } else if (passwordLength === "undefined") {
      return
    }

    if (parseInt(passwordLength) <= 128 || parseInt(passwordLength) >= 8) {
      var confirmation = confirm("You have selected a password that is " + parseInt(passwordLength) + " characters long.");
      if (confirmation === false) {
        return
      }
      console.log("User selected a password that is " + parseInt(passwordLength) + " characters long.")
    } else if (parseInt(passwordLength) > 128 || parseInt(passwordLength) < 8) {
      alert("Please select a number between 8-128")
      return
    }

    var characterTypes = prompt("Please select what type of characters you would like to include: lowercase, uppercase, numbers & symbols.")

    if (availableCharacters === null) {
      return
    }

    var finalPassword = []

    if (characterTypes.toLowerCase() === "lowercase") {
      for (i = 0; i < passwordLength; i++) {
        finalPassword.push(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)])
      };

      console.log("The user password is: " + finalPassword.join(""))
      return finalPassword.join("")
    }

    else if (characterTypes.toLowerCase() === "uppercase") {
      for (i = 0; i < passwordLength; i++) {
        finalPassword.push(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)])
      };

      console.log("The user password is: " + finalPassword.join(""))
      return finalPassword.join("")
    }

    else if (characterTypes.toLowerCase() === "numbers") {
      for (i = 0; i < passwordLength; i++) {
        finalPassword.push(numbers[Math.floor(Math.random() * numbers.length)])
      };

      console.log("The user password is: " + finalPassword.join(""))
      return finalPassword.join("")
    }

    else if (characterTypes.toLowerCase() === "symbols") {
      for (i = 0; i < passwordLength; i++) {
        finalPassword.push(symbols[Math.floor(Math.random() * symbols.length)])
      };

      console.log("The user password is: " + finalPassword.join(""))
      return finalPassword.join("")
    }

    else if (characterTypes.toLowerCase() === "all") {
      for (i = 0; i < passwordLength; i++) {
        finalPassword.push(availableCharacters[Math.floor(Math.random() * availableCharacters.length)])
      };

      console.log("The user password is: " + finalPassword.join(""))
      return finalPassword.join("")
    }

  }
}
generateBtn.addEventListener("click", writePassword)