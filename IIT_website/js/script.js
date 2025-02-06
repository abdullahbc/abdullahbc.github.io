document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});

document.addEventListener("DOMContentLoaded", function () {
    // Load the navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});
