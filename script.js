let scrollPosition = 0;
const step = 320; // Step size including card width and margin

function scrollContent(direction) {
    const container = document.getElementById('containerRef');
    const column = document.getElementById('columnRef');
    const containerWidth = container.offsetWidth;
    const columnWidth = column.scrollWidth;

    if (!container || !column) return;

    if (direction === 'right') {
        if (scrollPosition < columnWidth - containerWidth) {
            container.scrollTo({
                left: container.scrollLeft + step,
                behavior: 'smooth',
            });
            scrollPosition += step;
        }
    } else if (direction === 'left') {
        if (scrollPosition > 0) {
            container.scrollTo({
                left: container.scrollLeft - step,
                behavior: 'smooth',
            });
            scrollPosition -= step;
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const sidePanel = document.getElementById('sidePanel');
    const closeIcon = document.getElementById('CloseIcon');  // Correct ID for CloseIcon

    // Open side panel when menu icon is clicked
    menuIcon.addEventListener('click', () => {
        sidePanel.classList.add('active');  // Adds the 'active' class to open the panel
    });

    // Close side panel when close icon is clicked
    closeIcon.addEventListener('click', () => {
        sidePanel.classList.remove('active');  // Removes the 'active' class to close the panel
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('people-flipster').querySelector('ul');

    // Add click event listeners to the custom navigation items
    const navLinks = document.querySelectorAll('.flipster-custom-nav-link');

    navLinks.forEach((navLink, index) => {
        navLink.addEventListener('click', () => {
            scrollToCard(index);
            setActiveNavLink(index);
        });
    });

    function scrollToCard(index) {
        const cardWidth = step;
        const scrollAmount = index * cardWidth;
        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    function setActiveNavLink(index) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all the nav links
    const navLinks = document.querySelectorAll('.nav-link');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove the active-link class from all links
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                link.classList.remove('default-active'); // Ensure default-active is removed
            });
            
            // Add the active-link class to the clicked link
            link.classList.add('active-link');

            // Check if the clicked link is not Home, then remove default-active class
            if (!link.classList.contains('default-active')) {
                link.classList.remove('default-active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor tags
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor click behavior

            // Get the target element by ID
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth' // Enable smooth scrolling
            });
        });
    });
});



