// Simulate loading with window.onload
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const content = document.querySelector(".content");

    // Hide loader
    loader.classList.add("hidden");

    // Show content after loader transition
    setTimeout(() => {
        content.classList.add("show");
    }, 600); // matches transition duration
});