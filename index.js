let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add("hidden");
    } else {
        // Scrolling up
        navbar.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;
});
