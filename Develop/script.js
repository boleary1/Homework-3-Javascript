// Assignment Code
const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', () => {

  var passwordLength = prompt("Enter a value betweeen 8 and 124.")
  if (passwordLength >= 8 && passwordLength <= 124) {
    console.log("password meets criteria")
    var lowercase = confirm("Do you want your password to contain lowercase letters?")
    if (answer === true){
      alert("lowercse in password")
    }

  } 
  else{
    alert("Password must be a numeric value and between 8 and 124 charecters")
  }

}
)


// get values
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
function getRandomSymbol() {
    const symbols = '!@#$%^&*()<>?:",./;-[]{}|`~=';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
