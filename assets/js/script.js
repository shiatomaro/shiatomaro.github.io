document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
    const line1 = document.getElementById("loading-line-1");
    const line2 = document.getElementById("loading-line-2");

    if (line1) line1.style.display = "block";
    if (line2) line2.style.display = "none";
  
    setTimeout(() => {
      if (line1) line1.style.display = "none";
      if (line2) line2.style.display = "block";
    }, 1500);
  

    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.classList.add("fade-out");
        setTimeout(() => {
          loadingScreen.style.display = "none";
          mainContent?.classList.remove("hidden");
        }, 500);
      }
    }, 3500);

    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    if (menuToggle && sidebar) {
      menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("sidebar-visible");
      });
    }
  
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;
    function applyTheme(theme) {
      if (theme === "light") {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        if (modeToggle) modeToggle.innerHTML = "☀";
      } else {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        if (modeToggle) modeToggle.innerHTML = "☾";
      }
      localStorage.setItem("theme", theme);
    }

    applyTheme(localStorage.getItem("theme") || "dark");
  
    if (modeToggle) {
      modeToggle.addEventListener("click", function () {
        const newTheme = localStorage.getItem("theme") === "light" ? "dark" : "light";
        applyTheme(newTheme);
      });
    }

    const projects = document.querySelectorAll(".project-card");
    const nextBtn = document.getElementById("next-project");
    const prevBtn = document.getElementById("prev-project");
    let currentIndex = 0;
    function showProject(index) {
      projects.forEach((proj, i) => {
        proj.style.display = i === index ? "block" : "none";
      });
    }
    if (nextBtn && prevBtn) {
      nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % projects.length;
        showProject(currentIndex);
      });
      prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        showProject(currentIndex);
      });
    }
    showProject(currentIndex);
  });
  