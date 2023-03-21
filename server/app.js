// Function to handle login form submission
function handleLoginFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get the form data
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    // Send the form data to the server using AJAX
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      // Handle response from server
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  // Function to handle sign up form submission
  function handleSignupFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get the form data
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    // Send the form data to the server using AJAX
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      // Handle response from server
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  // Attach event listeners to forms
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  
  loginForm.addEventListener('submit', handleLoginFormSubmit);
  signupForm.addEventListener('submit', handleSignupFormSubmit);
  