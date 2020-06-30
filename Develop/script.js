// Assignment Code
const generateBtn = document.querySelector("#generate");
//working pretty well
// generateBtn.addEventListener('click', () => {

//   var passwordLength = prompt("Enter a value betweeen 8 and 128.")
//   if (passwordLength >= 8 && passwordLength <= 128) {
//     console.log("password meets criteria")
//     var lowercase = confirm("Do you want your password to contain lowercase letters?")
//     var uppercase = confirm("Do you want your password to contain uppercase letters?")
//     var number = confirm("Do you want your password to contain numbers?")
//     var symbol = confirm("Do you want your password to contain symbols?")
//     if (lowercase === true){
//       alert("lowercase in password")
//       console.log("lowercase allowed")
//     }

//   } 
//   else{
//     alert("Password must be a numeric value and between 8 and 124 charecters")
//   }

// }
// )

//attempt at making things look better, this idea is from assignment 33
// var questions = [
//   { q: "Do you want your password to contain lowercase letters?", a: [Array.fromCharCode(range(65,81))] },
//   { q: "Do you want your password to contain uppercase letters?", a: "t" },
//   { q: "Do you want your password to contain numbers?", a: "f" },
//   { q: "Do you want your password to contain symbols?", a: "f" },
// ];




// array concat to add all options together??





//lists all values from range
let arr = []
var i;
for (i = 97; i < (97 +26); i++) {
  console.log( String.fromCharCode( i )) ;
  arr.push(String.fromCharCode( i ));
}

console.log(arr)


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
