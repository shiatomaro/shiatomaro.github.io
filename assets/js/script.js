document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("content");

    function loadSection(section) {
        fetch(`sections/${section}.html`)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
                contentDiv.classList.add("fade-in"); // Add fade-in effect
                setTimeout(() => contentDiv.classList.remove("fade-in"), 500);
            })
            .catch(error => console.error("Error loading section:", error));
    }
    loadSection("home");
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const section = this.getAttribute("data-section");
            loadSection(section);
        });
    });
});
a