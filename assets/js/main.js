document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".ri-menu-4-fill"); // Menu icon
    const closeBtn = document.querySelector(".close-btn"); // Close button
    const mainNav = document.querySelector(".main-nav"); // Navigation menu

    console.log(menuToggle);
    

    // Function to open menu
    menuToggle.addEventListener("click", function () {
        mainNav.classList.add("active"); // Add active class to show menu
    });

    // Function to close menu
    closeBtn.addEventListener("click", function () {
        mainNav.classList.remove("active"); // Remove active class to hide menu
    });
});
