// Assignment Code

//large array is working, console log that to re-find my spot
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

//lists all values from range
const lowerCaseArray = []
for (let l = 97; l < (97 + 26); l++) {
  lowerCaseArray.push(String.fromCharCode(l));
}
const upperCaseArray = []
for (let u = 65; u < (65 + 26); u++) {
  upperCaseArray.push(String.fromCharCode(u));
}
const numberArray = []
for (let n = 48; n < (48 + 10); n++) {
  numberArray.push(String.fromCharCode(n));
}
const symbols = '!@#$%^&*()<>?:",./;-[]{}|`~=';
let symbolArray = Array.from(symbols)


generateBtn.addEventListener('click', () => {

  const passwordLength = prompt("Enter a value betweeen 8 and 128.")
  if (passwordLength >= 8 && passwordLength <= 128) {
    

    const largeArray = []
    const lowercase = confirm("Do you want your password to contain lowercase letters?")
    if (lowercase ) {
      largeArray.push(lowerCaseArray.join(''))
    }

    const uppercase = confirm("Do you want your password to contain uppercase letters?")
    if (uppercase) {
      largeArray.push(upperCaseArray.join(''))
    }
    const number = confirm("Do you want your password to contain numbers?")
    if (number) {
      largeArray.push(numberArray.join(''))
    }
    const symbol = confirm("Do you want your password to contain symbols?")
    if (symbol) {
      largeArray.push(symbolArray.join(''))
    }
    if(lowercase && uppercase && number && symbol ){
    const megaArray = [largeArray.join('')]
    const superArray =megaArray[0].split("")

    let finalPassword = "";
    for (i = 0; i < passwordLength; i++) {
      var randomValue = superArray[Math.floor(Math.random() * superArray.length)];
      finalPassword+=randomValue
    }
    passwordText.value = finalPassword;
  }
  else{
    alert("you must select atleast one option.")
  }
  }
  else {
    alert("Password must be a numeric value and between 8 and 124 charecters")
  }
}
)




