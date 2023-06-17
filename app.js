
let getUsername;
let getPassword;


function signup() {
    getUsername = document.getElementById("getUsername").value;
    getUsername = getUsername.trim();
    getPassword = document.getElementById("getPassword").value;
    getPassword = getPassword.trim();
    if( getUsername != "" && getPassword != ""){
    localStorage.setItem("getUsername", getUsername);
    localStorage.setItem("getPassword", getPassword);
    window.location.href = "index.html"
    }else{
        alert("Enter valid username and password")
    }
    
}

function login() {
    let username = document.getElementById("username").value;
    username = username.trim();
    let password = document.getElementById("password").value;
    password = password.trim();
    let storedUsername = localStorage.getItem("getUsername")
    let storedPassword = localStorage.getItem("getPassword")
    console.log('success')

    if (username == storedUsername &&
         password == storedPassword
         && username!= "" && password !=""){
        window.location.href = "home.html"
    } else {
        alert('Enter correct Username and Password')
    }
}
