// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const siteHeader = document.querySelector('.site-header');

const setMenu = (open) => {
  siteHeader.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
};

menuToggle?.addEventListener('click', () => {
  setMenu(!siteHeader.classList.contains('menu-open'));
});

// Close the menu after choosing a link, on outside click and on Escape
siteHeader?.querySelectorAll('.nav-pill a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});
document.addEventListener('click', (e) => {
  if (!siteHeader.contains(e.target)) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});

// FAQ: close others when one is opened (accordion behavior)
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      faqItems.forEach(other => {
        if (other !== item) other.open = false;
      });
    }
  });
});
