document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");

  // Apply the saved theme (or default to no class if no theme is saved)
  if (savedTheme === "dark-mode") {
    body.classList.add("dark-mode");
  } else if (savedTheme === "light-mode") {
    body.classList.remove("dark-mode");
  } else {
    // If no theme is saved, check system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light-mode");
    }
  }

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light-mode");
    } else {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    }

    // Add animation to the lightbulb
    const lightbulb = themeToggle.querySelector(".lightbulb");
    lightbulb.style.animation = "none";
    setTimeout(() => {
      lightbulb.style.animation = "pulse 0.5s";
    }, 10);
  });
});
