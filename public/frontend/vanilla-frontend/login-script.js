var myInput = document.getElementById("new-password");
var myInput2 = document.getElementById("new-password2");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var pwMatch = document.getElementById("pw-match")

// When the user clicks on the password field, show the message box
try {
  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }} catch(error) {
}

try {
  myInput2.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }} catch(error) {
}

// When the user clicks outside of the password field, hide the message box
try {
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }} catch(error) {
}
try {
  myInput2.onblur = function() {
    document.getElementById("message").style.display = "none";
  }} catch(error) {
}

// When the user starts to type something inside the first password field
try {
  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
    
    //Validate pw match
    if(myInput.value == myInput2.value) {
      pwMatch.classList.remove("invalid");
      pwMatch.classList.add("valid");
    } else {
      pwMatch.classList.remove("valid");
      pwMatch.classList.add("invalid");
    } 
  }} catch(error) {
}
// When the user starts to type something inside the second password field
try {
  myInput2.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput2.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput2.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput2.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if(myInput2.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }

    //Validate pw match
    if(myInput.value == myInput2.value) {
      pwMatch.classList.remove("invalid");
      pwMatch.classList.add("valid");
    } else {
      pwMatch.classList.remove("valid");
      pwMatch.classList.add("invalid");
    } 
  }} catch(error) {
}


// Login functionality


var objUsers = [
  {
      username: "Chris",
      password: "pw123456"
  },
  {
      username: "Tanner",
      password: "pw654321"
  }
]


function login() {
  //retrieve data from user input (user and pw)
  var objUsers = JSON.parse(localStorage.getItem("objUsers"));
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for(i = 0; i < objUsers.length; i++) {
      if(username == objUsers[i].username && password == objUsers[i].password) {
          console.log(username + " is logged in.")
          return
      }
  } 
  console.log(JSON.parse(localStorage.getItem("objUsers")));
}



//collecting form data and adding newUser to objUsers for login
function createAcc () {
  var registerUserFirstName = document.getElementById("new-first-name").value;
  var registerUserLastName = document.getElementById("new-last-name").value;
  var registerUserSex = document.getElementById("new-user-sex").value;
  var registerUserTS = document.getElementById("new-username-training-status").value;
  var registerUserEmail = document.getElementById("new-email").value;
  var registerUserAge = document.getElementById("new-user-age").value;
  var registerUser = document.getElementById("new-username").value;
  var registerPassword = document.getElementById("new-password").value;
  var newUser = {
      username: registerUser,
      password: registerPassword,
      firstName: registerUserFirstName,
      lastName: registerUserLastName,
      sex: registerUserSex,
      trainingStatus: registerUserTS,
      email: registerUserEmail,
      age: registerUserAge
    }

  for (i=0; i < objUsers.length; i++) {
    if(registerUser == objUsers[i].username) {
      alert("That username is taken, please use another.")
      return
    }
  }

  objUsers.push(newUser);
  console.log(objUsers);
  localStorage.objUsers = JSON.stringify(objUsers); //storing locally so we can test login functionality
  console.log(JSON.parse(localStorage.getItem("objUsers")));  
}

