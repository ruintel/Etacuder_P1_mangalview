// navigation bar sticky javascript external file
const navbar = document.getElementById('NavBar');
window.onscroll = function(){

  if (window.pageYOffset>= navbar.offsetHeight) {    
    navbar.classList.add('sticky');
  } else if(window.pageYOffset>= navbar.offsetTop) {
    navbar.classList.remove('sticky');    
  }
}

function myfun(){
  document.getElementById("NavBar").background=red;
  
}