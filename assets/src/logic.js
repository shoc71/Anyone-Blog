// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const toggleButton = document.getElementById('toggle');
var imageChange = document.getElementById('image');

// Theme toggle functionality
toggleButton.addEventListener('click', () => {
  const body = document.body;

  // Toggle the 'dark' class
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    imageChange.src = "https://cdn-icons-png.flaticon.com/512/169/169367.png"; // Light mode icon
  } else {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    imageChange.src = "https://purepng.com/public/uploads/large/purepng.com-moonnaturelightnightmoon-961524672147abmbw.png"; // Dark mode icon
  }
});

// Maintain theme on page reload
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    imageChange.src = "https://purepng.com/public/uploads/large/purepng.com-moonnaturelightnightmoon-961524672147abmbw.png"; // Dark mode icon
  } else {
    imageChange.src = "https://cdn-icons-png.flaticon.com/512/169/169367.png"; // Light mode icon
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

document.getElementById('blogForm').addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from refreshing page

  // Collect the data
  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const textarea = document.getElementById('textarea').value;

  const blogEntry = {
    username,
    title,
    content: textarea,
    timestamp: new Date().toISOString(), // Storing timestamps as well
  };

  // Get existing blog entries from local storage
  const existingEntries = JSON.parse(localStorage.getItem('blogs')) || [];

  // Add the new entry
  existingEntries.push(blogEntry);

  // Save back to local storage
  localStorage.setItem('blogs', JSON.stringify(existingEntries));

  console.log('Blog saved:', blogEntry);
  // alert('Blog entry saved successfully!');
  window.location.href = '../../blog.html'

});
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
