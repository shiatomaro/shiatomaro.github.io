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

// Get the modal
var popup = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("learnMoreBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    popup.style.display = " none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}