function setupLoginForm() {
  // Get a reference to the login form
  var loginForm = document.getElementById('login-form');

  // Add an event listener for when the login form is submitted
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to the username and password input fields
    var usernameInput = document.getElementById('login-username');
    var passwordInput = document.getElementById('login-password');

    // Check that both fields are non-empty; if either is empty,
    if (!usernameInput.value || !passwordInput.value) {
      alert('Please enter both a username and password');
    } else {
      window.location.href = '/feed';
    }
  });
}

function setupSignUpForm() {
  // Get a reference to the sign up form
  const signUpForm = document.getElementById('signup-form');

  signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to the input fields
    var usernameInput = document.getElementById('signup-username');
    var emailInput = document.getElementById('signup-email');
    var passwordInput = document.getElementById('signup-password');

    // Check that all fields are non-empty; if any are empty 
    if (!usernameInput.value || !emailInput.value || !passwordInput.value) {
      alert('Please enter all required fields');
    } else {
      alert('Thank you for signing up, ' + usernameInput.value + '! You may now log in.');
    }
  });
}

function redirectToFeed() {
  window.location.href = 'feed';
}

// Call the setup functions after the DOM has loaded
setupLoginForm();
setupSignUpForm();