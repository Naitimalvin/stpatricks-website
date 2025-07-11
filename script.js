
// Toggle mobile menu
function toggleMenu() {
  const nav = document.querySelector("header nav ul");
  nav.classList.toggle("show");
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = Math.ceil(target / 100);
      if (count < target) {
        counter.innerText = Math.min(count + increment, target);
        setTimeout(update, 50);
      }
    };
    update();
  });
});
