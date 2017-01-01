
 var tog = document.getElementById("toggle"),
  bar = document.getElementById("sidebar"),
  close = document.getElementById("close");


function menu () {
 bar.classList.toggle("open");
 tog.classList.toggle("open-tog");
 console.log("toggle clicked");
 }


tog.onclick = menu;


function testing () {
  console.log("loaded");
}

window.onload = testing();
