// Get references to the buttons in the popup
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// Add click event listeners to the buttons
button1.addEventListener("click", () => showMessage("Button 1 clicked!"));
button2.addEventListener("click", () => showMessage("Button 2 clicked!"));

// Function to show messages
function showMessage(message) {
  alert(message);
}
