// Handling Broken Images
const images = document.querySelectorAll('img');
images.forEach(function (img) {
    img.addEventListener('error', function () {
        img.src = 'images/default_image.jpg';  // Provide a path to a default image
        img.alt = 'Default Image';
    });
});

let lastScrollPosition = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // User is scrolling down - hide the navbar
        navbar.classList.add('navbar-hidden');
    } else {
        // User is scrolling up - show the navbar
        navbar.classList.remove('navbar-hidden');
    }

    lastScrollPosition = currentScrollPosition;
});
// for the main page click
document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            // Only toggle collapsible behavior on mobile screens
            if (window.innerWidth > 1024) {
                console.log("laptop version: not collapsible"); // debugging

            }else{
              
                var container = this.parentElement;
                container.classList.toggle("expanded"); // Toggle the 'expanded' class

                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
                console.log("mobile version: collapsible"); // for debugging 

            }
        });
    }
});
// Toggle navigation menu visibility
function toggleNav() {
    var navBar = document.getElementById("nav-bar");
    var isActive = navBar.classList.toggle("active");

    // Set aria-expanded for accessibility
    var menuIcon = document.querySelector(".menu-icon");
    menuIcon.setAttribute("aria-expanded", isActive);
}

// Close the navigation bar when a link is clicked or focus moves outside
document.addEventListener("DOMContentLoaded", function () {
    var navBar = document.getElementById("nav-bar");
    var navLinks = document.querySelectorAll("#nav-bar a");
    var menuIcon = document.querySelector(".menu-icon");

    // Handle link clicks
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            navBar.classList.remove("active");
            menuIcon.setAttribute("aria-expanded", false);
        });
    });

    // Handle click outside to close
    document.addEventListener("click", function (event) {
        if (!navBar.contains(event.target) && !event.target.closest(".menu-icon")) {
            navBar.classList.remove("active");
            menuIcon.setAttribute("aria-expanded", false);
        }
    });

    // Handle focus with Tab key
    navBar.addEventListener("keydown", function (event) {
        if (event.key === "Tab" && !navBar.contains(event.target)) {
            navBar.classList.remove("active");
            menuIcon.setAttribute("aria-expanded", false);
        }
    });

    // Toggle menu with Enter or Space keys
    menuIcon.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleNav();
        }
    });
});

