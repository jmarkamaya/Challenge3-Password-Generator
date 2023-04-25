// Assignment Code
// Do I have to make an array, or can i just make the character options just on string or number?
var generateBtn = document.querySelector("#generate");
var lowerChars = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z']
var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numericChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialChars = ["~" ,"!", "@", "#", "$", "%", "^", "&", "*", "_", "=", "/","?"]
var options = []
var length; 
// user gives options
// depending on those options we will build our options array (line 5)
// at the end our options array will contain only the characters that the user picked
// it will then do a loop for as long as the desired length
// that will pick a random char from a random array inside the options array

// Write password to the #password input
function writePassword() {
  
  var lowerCase;
  var upperCase;
  var numeric;
  var special;

  length = prompt("Length of Password between 8-128 characters (if returned length us not valid)")
  //(length < 8 || length > 128)
  // console.log(length);
  //can make an if statement that if length<8 make 8
     
  // get user info like length and what type of characters
      
      
  ;

  lowerCase = confirm("Include lowercase characters?");

  upperCase = confirm("Inlcude uppercase characters?");
  
  numeric = confirm("Include numeric characters?");
  
  special = confirm("Include special characters?");

  if (!lowerCase && !upperCase && !numeric && !special) {
    alert("Must select at least one condition")
    return conditions;
  }

  // if statements to add them to maybe like an options array

  if (lowerCase) {
    options.push(lowerChars)
  }
  if (upperCase) {
    options.push(upperChars)
  }
  if (numeric) {
    options.push(numericChars)
  }
  if (special) {
    options.push(specialChars)
  }

  // console.log(options);
  
        

  // sets the password var to whatever we get after generating 
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
  //.innerHtml
  // .textContent

 
  



}

// generate a password based of off the length the user provided
function generatePassword() {
  let genPassword = ''
  for (let i = 0; i < length; i++) {
    // gets a random char array from our options array
    let index = Math.floor(Math.random() * options.length)
    // console.log("index: " + index);
    // console.log("chosen array: " + options[index]);
    // gets a random char Index from one of the arrays in our options array
    let charIndex = Math.floor(Math.random() * options[index].length)
    let char = options[index][charIndex]
    genPassword += char
  }
  // console.log("generated password: " + password);
  return genPassword
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


//learn what event listner is
//learn what querySelector is
// ask tutor what is going on in this page so far