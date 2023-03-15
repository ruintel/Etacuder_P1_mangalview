// Get a reference to the Firebase Realtime Database
var database = firebase.database();

// Submit the contact form data to the Firebase Realtime Database
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  database.ref("contacts").push({
    name: name,
    email: email,
    message: message,
  });

  alert("Thank you for your message!");

  document.getElementById("contact-form").reset();
});
