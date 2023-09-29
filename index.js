let login = document.getElementsByClassName("login");
login = login[0];

let overlay = document.getElementsByClassName("overlayform ");
overlay = overlay[0];

let close = document.getElementsByClassName("close");
close = close[0];


login.onclick = function () {
  overlay.style.visibility = "visible";
};

close.onclick = function () {
  overlay.style.visibility = "hidden";
};
