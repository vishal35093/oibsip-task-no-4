document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (username === "user" && password === "password") {
        window.location.href = "welcome.html"; 
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password Please try Again";
    }
});

var objuser = [
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "vishal",
        password: "renukoot"
    },
    {
        username: "hindalco",
        password: "adityabirla"
    }
];

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (var i = 0; i < objuser.length; i++) {
        if (username === objuser[i].username && password === objuser[i].password) {
            console.log(username + " is logged in successfully");
            return;
        }
    }

    console.log("Incorrect username or password! Please try again.");
}
