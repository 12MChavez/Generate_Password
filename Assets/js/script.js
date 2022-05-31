//Global variables
let lowerAZ = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperAZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", \"]", "^", "_", "{", "|", "}", "~"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  
  function generatePassword() {
//user makes length and character choices
    selectedChar = [];
    let passLength = 0;
    length = prompt("Enter a password length between 8 and 128.")
    if(length < 8 || length > 128 ||   isNaN(length)) {    
      alert("Password has to be a number between 8 and 128.");
      return "Try Again"
    } else {
      passLength = length
      lowerAZConfirm = confirm("Do you want to use lowercase letters?") 
      if (lowerAZConfirm == true) {
        selectedChar = selectedChar.concat(lowerAZ)
      } 
      
      upperAZConfirm = confirm("Do you want to use uppercase letters?") 
      if (upperAZConfirm == true) {
        selectedChar = selectedChar.concat(upperAZ)
      }

      numArrConfirm = confirm("Do you want to use numbers?") 
      if (numArrConfirm == true) {
        selectedChar = selectedChar.concat(numArr)
      }
    };

      specCharConfirm = confirm("Do you want to use special characters?") 
      if (specCharConfirm == true) {
        selectedChar = selectedChar.concat(specChar)
    }
    
    console.log(selectedChar)
    let passStr = "";

    if(selectedChar.length > 0){
      for(let i=0; i < passLength; i++) {
        let randIndex = Math.floor(Math.random()*selectedChar.length)
        passStr += selectedChar[randIndex]
      }
      
      return passStr
    } else {
      alert("At least one character type should be selected")
      passStr = "Try Again"
      return passStr
    }
  }
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
