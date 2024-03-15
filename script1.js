document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Random user data (for demonstration)
    var users = [
        { username: "Arun", password: "kumar" },
        { username: "Salman", password: "khan" },
        // Add more user data as needed
    ];

    // Get username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if entered credentials match any user
    var validUser = users.find(user => user.username === username && user.password === password);
    
    if (validUser) {
        // Redirect to welcome page
        window.location.href = "welcomepage.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
