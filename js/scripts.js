// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  var currentYearElement = document.querySelector("footer span");
  var currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;

  var instagramPanel = document.getElementById("instagram-panel");
  var googlePanel = document.getElementById("google-panel");

  hidePanel(instagramPanel);
  hidePanel(googlePanel);
});

//hide a panel
function hidePanel(panel) {
  panel.style.display = "none";
}

//Modal

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");

  //modal setelah 2 detik
  setTimeout(function () {
    modal.style.display = "block";
  }, 2000);
});

function closePopup() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}
