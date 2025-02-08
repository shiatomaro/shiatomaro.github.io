document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-with-loading");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            // Remove active class from all links
            links.forEach(l => l.classList.remove("active"));

            // Add active class to clicked link
            this.classList.add("active");

            event.preventDefault(); // Prevent instant navigation (optional)
        });
    });
});
