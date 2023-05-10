// Event listener for adding a new post
document.getElementById("submit-post").addEventListener('click', function () {
  fetch('http://localhost:1337/api/post', {
      method:"post",
      body:JSON.stringify({message: document.getElementById("post-contents").value}),
      headers:{"Content-Type": "application/json"}
  }).then(response => {
      if (response.ok) {
        console.log('Post created successfully');
        // Clear the form field
        document.getElementById("post-contents").value = "";
        // Fetch and display all posts
        fetchPosts();
      } else {
        console.error('Failed to create post');
      }
  }).catch(error => {
      console.error('An error occurred:', error);
  });
});

// Function to fetch all posts and display them
const fetchPosts = async function() {
try {
  const response = await fetch('http://localhost:1337/api/post');
  if (response.ok) {
    const posts = await response.json();
    const postsContainer = document.getElementById('posts-body');
    // Clear the posts container
    if (postsContainer) {
      postsContainer.innerHTML = '';
      // Append each post to the container
      posts.forEach(function(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h3 class="post__title">${post.user.username}</h3>
          <p class="post__body">${post.message}</p>
        `;
        postsContainer.appendChild(postElement);
      });
    }
  } else {
    console.error('Failed to fetch posts');
  }
} catch (error) {
  console.log('An error occurred:', error);
}
};

// Fetch and display the initial posts
fetchPosts();
