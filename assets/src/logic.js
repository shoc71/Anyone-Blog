// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// Theme toggle functionality
document.getElementById('toggle').addEventListener('click', () => {
  const body = document.body;
  
  // Toggle between light and dark mode
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
});

// Maintain theme on page reload
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.className = savedTheme;
});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
