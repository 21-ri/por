// Animate Skill Bars

const progressBars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {

  progressBars.forEach((bar) => {

    const position = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      bar.style.width = bar.getAttribute("data-width");
    }

  });

});

// Navbar Background on Scroll

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "#020617";
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.95)";
  }

});
               
           
