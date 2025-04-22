const body = document.body;
const themeLabel = document.getElementById("themeLabel");


let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  const elements = document.querySelectorAll("[data-en]");
  elements.forEach(el => {
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });
}

//alternar entre spa eng
function toggleLanguage() {
  const newLang = currentLang === "en" ? "es" : "en";
  setLanguage(newLang);
}
//cargar idioma
setLanguage(currentLang);


const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkMode) {
  console.log("System uses Dark Mode");
 
} else {
  console.log("System uses light mode");
  
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
  console.log(current);
  const newTheme = current === "dark" ? "light" : "dark";
  console.log(newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Toggle theme class
  body.classList.toggle("dark-theme");

  // Update label based on current theme
  if (body.classList.contains("dark-theme")) {
    themeLabel.innerHTML = '<i class="fa-solid fa-sun"></i> <i class="fa-solid fa-toggle-on"></i> ';
  } else {
    themeLabel.innerHTML = '<i class="fa-solid fa-moon"></i> <i class="fa-solid fa-toggle-off"></i> ';
  }

  console.log("Theme applied");
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



const themeChange = window.matchMedia('(prefers-color-scheme: dark)');
    
      // Detect initial theme
      const setTheme = (isDark) => {
        console.log(isDark ? 'Dark mode' : 'Light mode');
        // You can also add/remove a class or change styles here
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      };
    
      // Initial theme
      setTheme(themeChange.matches);
    
      // Watch for changes
      themeChange.addEventListener('change', (e) => {
        setTheme(e.matches);
      });