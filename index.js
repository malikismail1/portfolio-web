// Smooth scroll for nav items
document.querySelectorAll('nav ul li').forEach(item => {
  item.addEventListener('click', () => {
    const section = document.querySelector(item.textContent.toLowerCase());
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Buy Now click action
document.querySelector('.box').addEventListener('click', () => {
  alert("Thanks for showing interest! Please contact me to proceed.");
});

// Contact form alert
const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for your message. I will get back to you soon!');
    form.reset();
  });
}