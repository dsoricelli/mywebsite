// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Click-to-enlarge for project photos
const photos = document.querySelectorAll('.photo img');
if (photos.length) {
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML = '<img alt="">';
  document.body.appendChild(box);
  const big = box.querySelector('img');
  photos.forEach(img => img.addEventListener('click', () => {
    big.src = img.src;
    big.alt = img.alt;
    box.classList.add('open');
  }));
  box.addEventListener('click', () => box.classList.remove('open'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') box.classList.remove('open'); });
}

// Current year in footer
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
