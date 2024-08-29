// ini js

// JavaScript to dynamically fill the welcome message
document.getElementById('userName').textContent = prompt("Please enter your name:");

// JavaScript for form validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var formData = document.getElementById('formData');

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }

    formData.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`;
    return false; // prevent form submission for demo purposes
}