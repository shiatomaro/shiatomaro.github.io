document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => document.getElementById("loading-line-1").classList.add("fade-in"), 500);
    setTimeout(() => document.getElementById("loading-line-2").classList.add("fade-in"), 1500);

    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("loading-screen").classList.add("hidden");
            document.getElementById("main-content").classList.remove("hidden");
        }, 500);
    }, 2500);
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("sidebar-visible");
    });
});