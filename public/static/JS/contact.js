var firebaseConfig = {
  apiKey: "AIzaSyBhPC9Z4vKAtEwHWixuBt-oBg6z0b1DM50",
  authDomain: "mangalview-75142.firebaseapp.com",
  databaseURL: "https://mangalview-75142-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mangalview-75142",
  storageBucket: "mangalview-75142.appspot.com",
  messagingSenderId: "558135774564",
  appId: "1:558135774564:web:e27b9f88d28d640a64fe71",
  measurementId: "G-6NY3RFPEG9",
};
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

