// Fade-In Section
window.addEventListener('scroll', function() {
    var fadeInSection = document.getElementById('As_a_third-year_student_in_the');
    var sectionPosition = fadeInSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        fadeInSection.classList.add('visible');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.getElementById('navbar');
    let isHoveringNavbar = false; // Track if the mouse is hovering over the navbar

    // Function to handle navbar visibility
    function handleNavbarVisibility() {
        if (!isHoveringNavbar) {
            if (window.scrollY > 300) {
                navbar.classList.add('hidden'); // Hide navbar on scroll
            } else {
                navbar.classList.remove('hidden'); // Show navbar at the top
            }
        }
    }

    // Scroll event to hide/show the navbar
    window.addEventListener('scroll', function() {
        handleNavbarVisibility();
    });

    // Mouse events to manage hover state
    navbar.addEventListener('mouseenter', function() {
        isHoveringNavbar = true;
        navbar.classList.remove('hidden'); // Show navbar on hover
    });

    navbar.addEventListener('mouseleave', function() {
        isHoveringNavbar = false;
        handleNavbarVisibility(); // Reapply scroll-based hiding logic
    });

    // Handle mouse movements within the vertical range of the navbar
    window.addEventListener('mousemove', function(event) {
        // Define the vertical range of the navbar
        let navbarHeight = 114; // Height of the navbar
        let topOffset = 0; // Distance from the top of the page
        let bottomOffset = topOffset + navbarHeight;

        if (event.clientY >= topOffset && event.clientY <= bottomOffset) {
            isHoveringNavbar = true;
            navbar.classList.remove('hidden'); // Show navbar when mouse is within its vertical range
        } else {
            isHoveringNavbar = false;
            handleNavbarVisibility(); // Reapply scroll-based hiding logic
        }
    });
});

// Fade-In Section
window.addEventListener('scroll', function() {
    var fadeInSection = document.getElementById('Since_2021_I_have_been_activel');
    var sectionPosition = fadeInSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        fadeInSection.classList.add('visible');
    }
});

window.addEventListener('scroll', function() {
    var fadeInSection = document.getElementById('I_recently_completed_a_one-mon');
    var sectionPosition = fadeInSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        fadeInSection.classList.add('visible');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all links with the class 'nav-link'
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor link behavior

            const targetId = this.getAttribute('href'); // Get the target section's ID
            const targetElement = document.querySelector(targetId); // Get the target element

            if (targetElement) {
                // Smoothly scroll to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Smooth scroll
                    block: 'start' // Align the top of the target element with the top of the viewport
                });
            }
        });
    });
});
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 50) { // Adjust this value as needed
        navbar.style.height = "80px"; // Example of reduced height
    } else {
        navbar.style.height = "114px"; // Original height
    }
});

