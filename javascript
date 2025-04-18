const btn = document.getElementById('ctaBtn');
if (window.innerWidth <= 768) {
    btn.classList.add('cta-mobile');
} else {
    btn.classList.add('cta-desktop');
}
