// Get a reference to the login form
const loginForm = document.getElementById("login-form");

// Add an event listener for when the login form is submitted
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get references to the username and password input fields
  const usernameInput = document.getElementById("login-username");
  const passwordInput = document.getElementById("login-password");

  // Check that both fields are non-empty; if either is empty, prevent the form from submitting and display an error message
  if (!usernameInput.value || !passwordInput.value) {
    alert("Please enter both a username and password");
  } else {
    window.location.href = "/feed";
    
  }
});

// Get a reference to the sign up form
const signUpForm = document.getElementById("signup-form");

signUpForm.addEventListener("submit", function (event) {
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

function redirectToFeed() {
  window.location.href = "feed";
}

// Fetch all users
function getAllUsers() {
  fetch('http://localhost:1337/api/user')
    .then(function (response) {
      if (response.status !== 200) {
        console.log('Problem with the fetch call! Status: ' + response.status);
        return;
      }
      response.json().then(function (data) {
        var userHtml = "";
        for (var i in data) {
          userHtml += "<li id='" + data[i].id + "'>" + data[i].email + "</li>";
        }
        document.getElementById('users').innerHTML = userHtml;
      });
    })
    .catch(function (error) {
      console.log('Error fetching users: ', error);
    });
}
// Create a new post
function createPost(title, body) {
  const post = {
    title: title,
    body: body
  };

  fetch('http://localhost:1337/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(function (response) {
      if (response.status !== 201) {
        console.log('Problem with the fetch call! Status: ' + response.status);
        return;
      }
      console.log('Post created successfully!');
    })
    .catch(function (error) {
      console.log('Error creating post: ', error);
    });
}

/* // Delete a post
function deletePost(postId) {
  fetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  })
    .then(function (response) {
      if (response.status !== 200) {
        console.log('Problem with the fetch call! Status: ' + response.status);
        return;
      }
      console.log('Post deleted successfully!');
    })
    .catch(function (error) {
      console.log('Error deleting post: ', error);
    });
} */