// Function to retrieve blogs from local storage
// Function to read blogs from local storage
const readLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('blogs')) || [];
    return data;
  };
  
  // Function to display blogs on the page
  const displayBlogs = () => {
    const blogs = readLocalStorage();
    console.log('Blogs fetched from local storage:', blogs);
  
    const blogContainer = document.getElementById('blogContainer');
    if (!blogContainer) {
      console.error('Blog container not found!');
      return;
    }
  
    blogContainer.innerHTML = ''; // Clear previous content
  
    if (blogs.length === 0) {
      blogContainer.innerHTML = '<p>No blogs to display. Add some blogs!</p>';
      return;
    }
  
    blogs.forEach((blog) => {
      const blogDiv = document.createElement('div');
      blogDiv.className = 'blog article card';
  
      blogDiv.innerHTML = `
        <h3>${blog.title}</h3><sup>- ${new Date(blog.timestamp).toLocaleString()}</sup>
        <p>${blog.username}</p>
        <hr><br />
        <blockquote>${blog.content}</blockquote>
      `;
  
      blogContainer.appendChild(blogDiv);
    });
  };
  
  // Call displayBlogs on page load
  window.addEventListener('DOMContentLoaded', displayBlogs);