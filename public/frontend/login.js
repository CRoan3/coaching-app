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
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(i = 0; i < objUsers.length; i++) {
        if(username == objUsers[i].username && password == objUsers[i].password) {
            console.log(username + " is logged in.")
            return
        }
    } 
}

