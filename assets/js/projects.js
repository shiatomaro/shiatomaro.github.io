document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="container mt-5">
            <h2>My Projects</h2>
            <a href="index.html" class="btn btn-primary mb-3">Back to Home</a>

            <div id="projectsCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card text-center">
                            <img src="assets/images/project1.jpg" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">User Management Web App</h5>
                                <a href="https://github.com/shiatomaro/FLIES" class="btn btn-secondary">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card text-center">
                            <img src="assets/images/project2.jpg" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">AI Discord Bot</h5>
                                <a href="https://github.com/shiatomaro/go-gemini-discord-bot" class="btn btn-secondary">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    `;

    // Load carousel functionality
    loadCarousels();
});
