import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDLta5EVoPcLSHEi9xCWNHp2xAs5gbCa58",
  authDomain: "mangalview-b957f.firebaseapp.com",
  databaseURL: "https://mangalview-b957f-default-rtdb.firebaseio.com",
  projectId: "mangalview-b957f",
  storageBucket: "mangalview-b957f.appspot.com",
  messagingSenderId: "1030102602209",
  appId: "1:1030102602209:web:3d9f8b86c72b6aceb3c2a0",
  measurementId: "G-Y592183BWF"
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase();
const reference = ref(db, 'users/' + userID);

set(reference, 
  {
    name: name,
    email: email,
    message: message
  });

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