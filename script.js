// Handling Broken Images
const images = document.querySelectorAll('img');
images.forEach(function (img) {
    img.addEventListener('error', function () {
        img.src = '../images/default_image.jpg';  // Provide a path to a default image
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
// icon on main page for mobile version (laptop version the nav bar is sticked at top)
function toggleNav() {
    var navBar = document.getElementById("nav-bar");
    navBar.classList.toggle("active");
}

// Close the navigation bar when a link inside it is clicked, or outside is clicked

document.addEventListener("DOMContentLoaded", function () {
    var navBar = document.getElementById("nav-bar");
    var navLinks = document.querySelectorAll('#nav-bar a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {


            var targetId = this.getAttribute('href').substring(1); // Get the ID without '#'
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                if (window.innerWidth < 1024) {
                    // Collapse all other content sections
                    var allContents = document.querySelectorAll('.content');
                    allContents.forEach(function (content) {
                        content.style.display = 'none';
                    });
                }


                // Expand the target content
                var content = targetElement.querySelector('.content');
                if (content) {
                    content.style.display = 'block';
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }

                // Hide the navigation bar
                navBar.classList.remove("active");
            }
        });
    });
    document.addEventListener("click", function (event) {
        if (!navBar.contains(event.target) && !event.target.closest('.menu-icon')) {
            navBar.classList.remove("active");
        }
    });
});


