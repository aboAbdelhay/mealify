const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const sun = document.getElementById("sun");
const moonn = document.getElementById("moonn");
themeToggle.addEventListener("click", () => {
  root.classList.toggle("dark-mode");
  sun.classList.toggle("show");
  moonn.classList.toggle("show");
});

// let lastScrollTop = 0;
// const navbar = document.getElementById("navbar");
// const nav = document.getElementById("nav");

// window.addEventListener("scroll", function () {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop > lastScrollTop) {
//     // Scrolling down
//     navbar.style.transform = "translateY(-100%)";
//     nav.style.transform = "translate(0)";
//   } else {
//     // Scrolling up
//     navbar.style.transform = "translateY(0)";
//     nav.style.transform = "translate(100%)";
//   }

//   lastScrollTop = scrollTop;
// });
