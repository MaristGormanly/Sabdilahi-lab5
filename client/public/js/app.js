// Get a reference to the login form
const loginForm = document.getElementById("submit-button");

// Add an event listener for when the login form is submitted
loginForm.addEventListener("click", function (event) {
  console.log(1);
  // Get references to the username and password input fields
  const usernameInput = document.getElementById("login-username");
  const passwordInput = document.getElementById("login-password");

  // Check that both fields are non-empty; if either is empty, prevent the form from submitting and display an error message
  if (!usernameInput.value || !passwordInput.value) {
    event.preventDefault();
    alert("Please enter both a username and password");
  } 
  else {
    alert("Login successful! Welcome, " + usernameInput.value);
  }
});
console.log(0);

// Get a reference to the sign up form
const signUpForm = document.getElementById("submit-button");

signUpForm.addEventListener("click", function (event) {
  event.preventDefault();

  // Get references to the input fields
  const usernameInput = document.getElementById("signup-username");
  const emailInput = document.getElementById("signup-email");
  const passwordInput = document.getElementById("signup-password");

  // Check that all fields are non-empty; if any are empty, display an error message
  if (!usernameInput.value || !emailInput.value || !passwordInput.value) {
    alert("Please enter all required fields");
  } else {
    alert("Thank you for signing up, " + usernameInput.value + "! You may now log in.");
  }
});
