// Add event listeners to the navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      // Remove active class from all sections
      document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
      });
      // Add active class to the target section
      targetSection.classList.add('active');
    }
  });
});
