// Adds a hairline border under the nav once the page has scrolled
const nav = document.getElementById('nav');

function updateNavState() {
  if (window.scrollY > 8) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavState, { passive: true });
updateNavState();

// Remove the scanline element from the DOM once its animation finishes
const scanline = document.querySelector('.scanline');
if (scanline) {
  scanline.addEventListener('animationend', () => scanline.remove());
}
