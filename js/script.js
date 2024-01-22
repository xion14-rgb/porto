// scripts.js

// Hide side panels initially
document.addEventListener("DOMContentLoaded", function () {
  var instagramPanel = document.getElementById("instagram-panel");
  var googlePanel = document.getElementById("google-panel");

  hidePanel(instagramPanel);
  hidePanel(googlePanel);
});

// Function to hide a panel
function hidePanel(panel) {
  panel.style.display = "none";
}
