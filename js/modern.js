// Mobile navigation toggle with accessible state management
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');

if (navToggle && menu) {
    navToggle.addEventListener('click', () => {
        const open = menu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(open));
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Lightweight reveal-on-scroll animation for premium motion design
const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || '0';
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

revealItems.forEach((item) => observer.observe(item));
