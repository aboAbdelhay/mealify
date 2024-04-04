const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const sun = document.getElementById("sun");
const moonn = document.getElementById("moonn");
themeToggle.addEventListener("click", () => {
  root.classList.toggle("dark-mode");
  sun.classList.toggle("show");
  moonn.classList.toggle("show");
});
