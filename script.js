// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defines base variables and arrays.
var lowArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]//length=26
var capArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]//length=26
var numArr = ["0","1","2","3","4","5","6","7","8","9"] //length=10
var specArr = ["!","#","$","%","&","'","(",")","*","+","-",".","/","?",":",";","<",">","=","@","[","]","^","_","`","{","}","|","~"] //length=29

var chara = 8
var lowerCase = true
var upperCase = false
var numbers = false
var special = false

var lowChoice = lowArr[Math.floor(Math.random() * lowArr.length)]
var capChoice = capArr[Math.floor(Math.random() * capArr.length)]
var numChoice = numArr[Math.floor(Math.random() * numArr.length)]
var specChoice = specArr[Math.floor(Math.random() * specArr.length)]

var text=""
var optionsRand = []

// Gets string choice from user, check to ensure it fits length requirements.
function characters(){
  var chara = window.prompt("How long do you want your password?\nPlease enter a number between 8 and 126")
  if (chara<8 || chara>126){
    window.alert("That's not a valid length, sorry!")
    characters()
  }
  return chara
}
// Receives parameter choices from user, ensures they pick at least one or sends them back to the start.
function parametersCheck(){
  lowerCase=window.confirm("Do you want lowercase letters?")
  upperCase=window.confirm("Do you want CAPITAL letters?")
  numbers=window.confirm("Do you want numbers (i.e. 1,2,3)?")
  special=window.confirm("Do you want special characters(i.e. ., ?, &, ], ~)?")
  if (numbers===false && special===false && lowerCase===false && upperCase===false){
    window.alert("Please select at least one type of character")
    characters()
  }
  return lowerCase
  return upperCase
  return numbers
  return special
}
// Gathers variables, randomizes order, then creates the password string.
function generatePassword(lowArr,capArr,numArr,specArr){
  
  var i=0
  while(i<=chara){
  
  if (lowerCase===true){
    optionsRand.push(lowChoice)
  }
  if(upperCase===true){
    optionsRand.push(capChoice)
  }
  if (numbers===true){
    optionsRand.push(numChoice)
  }
  if (special===true){
    optionsRand.push(specChoice)
  }
  
    text += optionsRand[Math.floor(Math.random() * optionsRand.length)]
    optionsRand=[]

    i++
  }
  return text
}
// Writes the password to the #password input in the html.
function writePassword() {
  characters()
  parametersCheck()
  generatePassword()
  var password = text;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

