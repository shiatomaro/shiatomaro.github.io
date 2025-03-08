document.addEventListener("DOMContentLoaded", function () {
    // Show each line with a delay
    setTimeout(() => document.getElementById("loading-line-1").classList.add("fade-in"), 500);
    setTimeout(() => document.getElementById("loading-line-2").classList.add("fade-in"), 1500);

    // Hide loading screen after ~2.5 seconds
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("loading-screen").classList.add("hidden");
            document.getElementById("main-content").classList.remove("hidden");
        }, 500);
    }, 2500);
});