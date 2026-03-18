// ── V2 — Trivo Reimagined JS ──

// Scroll-triggered reveal animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Scroll progress bar
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
}, { passive: true });

// Navbar scroll effect
const nav = document.getElementById('nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 60) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
}, { passive: true });

// Animated counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = Math.floor(current);
            }, 16);

            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat__number').forEach(el => counterObserver.observe(el));

// Mobile burger menu
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = burger.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const spans = burger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    });
});
