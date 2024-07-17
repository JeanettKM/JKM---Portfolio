// script.js

document.getElementById("openModalBtn").onclick = function () {
  document.getElementById("phoneModal").style.display = "flex";
};

document.querySelector(".close").onclick = function () {
  document.getElementById("phoneModal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("phoneModal")) {
    document.getElementById("phoneModal").style.display = "none";
  }
};
