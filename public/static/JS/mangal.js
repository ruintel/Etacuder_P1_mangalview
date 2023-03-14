// navigation bar sticky
const navbar = document.getElementById('NavBar');
window.onscroll = function(){

  if (window.pageYOffset>= navbar.offsetHeight) {    
    navbar.classList.add('sticky');
  } else if(window.pageYOffset>= navbar.offsetTop) {
    navbar.classList.remove('sticky');    
  }
}
