// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default jump
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  });
});

// Example: Toggle Project Details (add a "Read More" button)
const projectDetails = document.querySelectorAll('.project .details');

projectDetails.forEach(details => {
  const button = document.createElement('button');
  button.textContent = 'Read More';
  button.addEventListener('click', () => {
    details.classList.toggle('show'); // Toggle visibility
    button.textContent = details.classList.contains('show') ? 'Read Less' : 'Read More';
  });
  details.parentNode.insertBefore(button, details); // Insert the button
});