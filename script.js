const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

const saved = localStorage.getItem('ssk-theme');
if (saved === 'light') root.setAttribute('data-theme', 'light');

themeBtn?.addEventListener('click', () => {
  const light = root.getAttribute('data-theme') === 'light';
  if (light) {
    root.removeAttribute('data-theme');
    localStorage.setItem('ssk-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('ssk-theme', 'light');
  }
});

navToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, {threshold: 0.12});

document.querySelectorAll('.section, .signal-strip, .project, .skill-card, .credential-grid article').forEach(el => observer.observe(el));
