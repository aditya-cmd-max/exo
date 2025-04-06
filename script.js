// script.js

// Fade-in on scroll effect
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fadeIn");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElements.forEach(el => observer.observe(el));
});

// Form validation if needed (basic example)
/*
document.querySelector("form")?.addEventListener("submit", function(e) {
  const emailInput = document.querySelector("input[type='email']");
  if (!emailInput.value.includes("@")) {
    alert("Please enter a valid email.");
    e.preventDefault();
  }
});
*/
