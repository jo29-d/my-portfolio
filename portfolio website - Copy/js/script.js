// ========== Toggle Icon Navbar ==========
const menuIcon = document.querySelector('#menu-icon'); // Use querySelector instead of querySelectorAll
const navbar = document.querySelector('.navbar'); // Use querySelector for single element

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ========== Scroll Sections Active Link ==========
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Sticky Navbar
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Active Section Highlight
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Remove toggle icon and navbar when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ========== Close Menu When Clicking Navbar Link ==========
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// ========== Scroll Reveal ==========
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: false // Better for user experience than frequent resets
});

// Configure ScrollReveal targets
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-container, .portfolio-box, .contact form', { 
    origin: 'bottom',
    interval: 150 // Stagger animations
});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });