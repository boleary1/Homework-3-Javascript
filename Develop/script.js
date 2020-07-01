// Assignment Code

//large array is working, console log that to re-find my spot
const generateBtn = document.querySelector("#generate");


//lists all values from range
let lowerCaseArray = []
var l; //l for lowercase
for (l = 97; l < (97 + 26); l++) {
  lowerCaseArray.push(String.fromCharCode(l));
}
let upperCaseArray = []
var u; //u for lowercase
for (u = 65; u < (65 + 26); u++) {
  upperCaseArray.push(String.fromCharCode(u));
}
let numberArray = []
var n; //n for lowercase
for (n = 48; n < (48 + 10); n++) {
  numberArray.push(String.fromCharCode(n));
}
const symbols = '!@#$%^&*()<>?:",./;-[]{}|`~=';
let symbolArray = Array.from(symbols)


generateBtn.addEventListener('click', () => {

  var passwordLength = prompt("Enter a value betweeen 8 and 128.")
  if (passwordLength >= 8 && passwordLength <= 128) {

    var largeArray = []
    var megaArray = [largeArray.join('')]
    var lowercase = confirm("Do you want your password to contain lowercase letters?")
    if (lowercase == 1) {
      largeArray.push(lowerCaseArray.join(''))
    }
    var uppercase = confirm("Do you want your password to contain uppercase letters?")
    if (uppercase == 1) {
      largeArray.push(upperCaseArray.join(''))
    }
    var number = confirm("Do you want your password to contain numbers?")
    if (number == 1) {
      largeArray.push(numberArray.join(''))
    }
    var symbol = confirm("Do you want your password to contain symbols?")
    if (symbol == 1) {
      largeArray.push(symbolArray.join(''))
    }

    var str= [largeArray.join('')]
    var superArray = str.split()
    console.log(superArray)
    console.log(typeof megaArray)
    let finalPassword = [];
    for (i = 0; i < passwordLength; i++) {
      var randomValue = megaArray[Math.floor(Math.random() * megaArray.length)];
      finalPassword.push(randomValue)
      console.log(megaArray.substring(Math.floor(Math.random() * megaArray.length)))
    }
  
    console.log(largeArray)
    console.log(finalPassword)

  }
  else {
    alert("Password must be a numeric value and between 8 and 124 charecters")
  }
}
)



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
