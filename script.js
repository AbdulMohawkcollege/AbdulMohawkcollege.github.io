document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
        this.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });
});
