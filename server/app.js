// Get a reference to the login form
const loginForm = document.getElementById("login-form");

// Add an event listener for when the login form is submitted
loginForm.addEventListener("submit", function(event) {
  // Get references to the username and password input fields
  const usernameInput = document.getElementById("login-username");
  const passwordInput = document.getElementById("login-password");
  
  // Check that both fields are non-empty; if either is empty, prevent the form from submitting and display an error message
  if (!usernameInput.value || !passwordInput.value) {
    event.preventDefault();
    alert("Please enter both a username and password");
  }
});

// Get a reference to the sign up form
const signUpForm = document.getElementById("signup-form");

// Add an event listener for when the sign up form is submitted
signUpForm.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Set the text content of the confirmation message
  confirmationMessage.textContent = "Thank you for signing up!";
  
  // Remove the avatar and form from the sign up container, and add the confirmation message
  signUpContainer.removeChild(signUpAvatar);
  signUpContainer.removeChild(signUpForm);
  signUpContainer.appendChild(confirmationMessage);
});
