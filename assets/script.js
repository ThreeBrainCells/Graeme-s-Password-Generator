// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defines base variables and arrays.
var lowArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]//length=26
var capArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]//length=26
var numArr = ["0","1","2","3","4","5","6","7","8","9"] //length=10
var specArr = ["!","#","$","%","&","'","(",")","*","+","-",".","/","?",":",";","<",">","=","@","[","]","^","_","`","{","}","|","~"] //length=29

var lowerCase = true
var upperCase = false
var numbers = false
var special = false

var optionsRand = []


// Gathers variables, randomizes order, then creates the password string.
function generatePassword(){
  var text=""
  var halfString=""
  // Gets the password length and ensures it's valid
  var chara = window.prompt("How long do you want your password?\nPlease enter a number between 8 and 126")
  if (chara<8 || chara>126){
    window.alert("That's not a valid length, sorry!")
    var chara = window.prompt("How long do you want your password?\nPlease enter a number between 8 and 126")
  }
  // Gathers the user's parameters and ensures they pick at least one.
  lowerCase=window.confirm("Do you want lowercase letters?")
  upperCase=window.confirm("Do you want CAPITAL letters?")
  numbers=window.confirm("Do you want numbers (i.e. 1,2,3)?")
  special=window.confirm("Do you want special characters(i.e. ., ?, &, ], ~)?")
  if (numbers===false && special===false && lowerCase===false && upperCase===false){
    window.alert("Please select at least one type of character")
    lowerCase=window.confirm("Do you want lowercase letters?")
    upperCase=window.confirm("Do you want CAPITAL letters?")
    numbers=window.confirm("Do you want numbers (i.e. 1,2,3)?")
    special=window.confirm("Do you want special characters(i.e. ., ?, &, ], ~)?")
  }
// Writes guaranteed characters depending on parameters.
var param = 0
if (lowerCase===true){
  var lowStr = lowArr[Math.floor(Math.random() * lowArr.length)]
  param++
}
if (upperCase===true){
  var capStr = lowArr[Math.floor(Math.random() * capArr.length)]
  param++
}
if (numbers===true){
  var numStr = lowArr[Math.floor(Math.random() * numArr.length)]
  param++
}
if (special===true){
  var specStr = lowArr[Math.floor(Math.random() * specArr.length)]
  param++
}
var string = (chara - param)
console.log(string);
// Writes the password via looping randomizers.
  var i=0
  while(i<string){
    if (lowerCase===true){
    var lowChoice = lowArr[Math.floor(Math.random() * lowArr.length)]
    optionsRand.push(lowChoice)
  }
  if(upperCase===true){
    var capChoice = capArr[Math.floor(Math.random() * capArr.length)]
    optionsRand.push(capChoice)
  }
  if (numbers===true){
    var numChoice = numArr[Math.floor(Math.random() * numArr.length)]
    optionsRand.push(numChoice)
  }
  if (special===true){
    var specChoice = specArr[Math.floor(Math.random() * specArr.length)]
    optionsRand.push(specChoice)
  }
  
    halfString += optionsRand[Math.floor(Math.random() * optionsRand.length)]
    optionsRand=[]

    i++
  }
// Adds guaranteed characters into password
  var pos = Math.floor(Math.random() * (halfString.length + 1))
halfString = [halfString.slice(0, pos), lowStr, halfString.slice(pos)].join("")
halfString = [halfString.slice(0, pos), capStr, halfString.slice(pos)].join("")
halfString = [halfString.slice(0, pos), numStr, halfString.slice(pos)].join("")
halfString = [halfString.slice(0, pos), specStr, halfString.slice(pos)].join("")

text= halfString
  return text
}

// Writes the password to the #password input in the html.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

