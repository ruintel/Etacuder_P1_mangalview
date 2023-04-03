// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyBhPC9Z4vKAtEwHWixuBt-oBg6z0b1DM50",
  authDomain: "mangalview-75142.firebaseapp.com",
  databaseURL: "https://mangalview-75142-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mangalview-75142",
  storageBucket: "mangalview-75142.appspot.com",
  messagingSenderId: "558135774564",
  appId: "1:558135774564:web:e27b9f88d28d640a64fe71",
  measurementId: "G-6NY3RFPEG9"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');

  var email = getInputVal('email');
  
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}