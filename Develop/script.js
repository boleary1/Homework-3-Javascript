// Assignment Code
const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', () => {

  var passwordLength = prompt("Enter a value betweeen 8 and 124.")
  if (passwordLength >= 8) {
    console.log("long enough")
    if (passwordLength <= 128) {
      console.log("short enough")
    }
  }
}
)
  //   alert("password is too long")

  // alert("password not long enough")



// if {  //button pressed
//   var charecterQuantity = prompt("Enter a value betweeen 8 and 124.")
// } 


// get values
//get lowercase letters
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
//random rumber
console.log(Math.floor(Math.random() * 26) + 97);
//random lower case
console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
//random uppercase
console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
//random number
const symbols = '!@#$%^&*()<>?:",./;-[]{}|`~=';
console.log(symbols[Math.floor(Math.random() * symbols.length)]);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
