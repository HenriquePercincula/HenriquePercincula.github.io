function esconder(){
  var nav = document.getElementById('nav')
  nav.style.display = "none";
}

function mostrar() {
  var nav = document.getElementById('nav')
  if (nav.style.display == "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}