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

document.addEventListener('DOMContentLoaded', () => {
  const postForm = document.getElementById('post-form');
  const postsContainer = document.getElementById('posts-container');

  // // Function to create a new post
  // const createPost = async (title, body) => {
  //   try {
  //     const response = await fetch('/api/posts', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ title, body }),
  //     });
  //     if (response.ok) {
  //       console.log('Post created successfully');
  //       // Clear the form fields
  //       document.getElementById('post-title').value = '';
  //       document.getElementById('post-body').value = '';
  //       // Refresh the posts
  //       fetchPosts();
  //     } else {
  //       console.error('Failed to create post');
  //     }
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  // };

  // Function to fetch all posts and display them
  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      if (response.ok) {
        const posts = await response.json();
        // Clear the posts container
        postsContainer.innerHTML = '';
        // Append each post to the container
        posts.forEach((post) => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          postElement.innerHTML = `
            <h3 class="post__title">${post.title}</h3>
            <p class="post__body">${post.body}</p>
          `;
          postsContainer.appendChild(postElement);
        });
      } else {
        console.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  // Event listener for form submission
  postForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('post-title').value;
    const body = document.getElementById('post-body').value;
    await createPost(title, body);
  });

  // Fetch and display the initial posts
  fetchPosts();
});




