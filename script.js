// script.js

// Function to show a message when the button is clicked
function greetUser() {
  const message = document.createElement('p');
  message.textContent = "👋 Thanks for collaborating!";
  message.style.fontWeight = "bold";
  message.style.color = "#27ae60";
  document.body.appendChild(message);
}

// Attach event listener to the button
document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.textContent = "Click Me!";
  button.onclick = greetUser;
  document.body.appendChild(button);
});
