// TODO: Create a variable that selects the main element, and a variable that selects the back button element

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

const displayBlogs = () => {
    const blogs = readLocalStorage();
    const blogContainer = document.getElementById('blogContainer'); // Add a container in HTML
  
    blogContainer.innerHTML = ''; // Clear previous content
  
    blogs.forEach((blog) => {
      const blogDiv = document.createElement('div');
      blogDiv.className = 'blog';
  
      blogDiv.innerHTML = `
        <h3>${blog.title}</h3>
        <p><strong>${blog.username}</strong> - ${new Date(blog.timestamp).toLocaleString()}</p>
        <p>${blog.content}</p>
      `;
  
      blogContainer.appendChild(blogDiv);
    });
  };
  
  // Call displayBlogs on page load
  window.addEventListener('DOMContentLoaded', displayBlogs);
  