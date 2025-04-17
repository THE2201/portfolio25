const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkMode) {
  console.log("System uses Dark Mode");
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
} else {
  console.log("System uses light mode");
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}

const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// Set initial theme
const storedTheme = localStorage.getItem("theme");
const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");
document.documentElement.setAttribute("data-theme", initialTheme);

// Toggle function
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  console.log('Theme applied');
  
}

$(document).ready(function () {
  // Toggle mobile menu
  $("#mobile-menu").click(function () {
    $(".navbar ul").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
  });

  // Detectar movimiento de dedo
  let startX = 0;
  let endX = 0;

  document.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });

  document.addEventListener("touchend", function (e) {
    endX = e.changedTouches[0].clientX;
    let swipeDistance = endX - startX;

    let screenWidth = window.innerWidth;

    // If swipe right (center to right) and nav is open
    if (
      startX > screenWidth * 0.3 &&
      startX < screenWidth * 0.7 &&
      swipeDistance > 50 &&
      $(".navbar ul").hasClass("mobile-nav")
    ) {
      $(".navbar ul").removeClass("mobile-nav");
      $("#mobile-menu").removeClass("is-active");
    }
  });
});
