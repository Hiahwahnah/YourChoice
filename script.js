// Initialize EmailJS (only once)
emailjs.init("GIuk7MlVoSzjqBYr4");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const statusMessage = document.getElementById("form-status");

    if (!name || !email || !message) {
        statusMessage.textContent = "Please fill out all fields!";
        statusMessage.style.color = "red";
        return;
    }

    // Send the form data using EmailJS
    emailjs.sendForm("service_t977nkf", "template_ct1su08", this)
        .then(function(response) {
            // On success, redirect to the Thank You page
            window.location.href = "thank-you.html";
        }, function(error) {
            // On error, show a failure message
            statusMessage.textContent = "Oops! Something went wrong. Please try again.";
            statusMessage.style.color = "red";
        });
});
