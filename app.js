
let getUsername;
let getPassword;


function signup() {
    getUsername = document.getElementById("getUsername").value;
    getPassword = document.getElementById("getPassword").value;
    console.log(getUsername, ' value 1')
    console.log(getPassword, ' value 2')
    localStorage.setItem("getUsername", getUsername);
    localStorage.setItem("getPassword", getPassword);
    window.location.href = "index.html"
}



function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let storedUsername = localStorage.getItem("getUsername")
    let storedPassword = localStorage.getItem("getPassword")
    console.log('success')

    if (username == storedUsername && password == storedPassword) {
        window.location.href = "home.html"

    } else {
        alert('Enter correct Username and Password')
    }
}
