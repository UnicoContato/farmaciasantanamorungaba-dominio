document.getElementById('year').textContent = new Date().getFullYear();

const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const modalPrivacy = document.getElementById('modal-privacy');
const btnPrivacy = document.getElementById('btn-privacy');
const closeModal = document.getElementById('close-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

btnPrivacy.addEventListener('click', () => {
    modalPrivacy.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

const hideModal = () => {
    modalPrivacy.classList.add('hidden');
    document.body.style.overflow = 'auto';
};

closeModal.addEventListener('click', hideModal);
closeModalBtn.addEventListener('click', hideModal);

modalPrivacy.addEventListener('click', (e) => {
    if (e.target === modalPrivacy) {
        hideModal();
    }
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});