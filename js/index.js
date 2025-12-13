// Set section background image based on current page
document.addEventListener("DOMContentLoaded", function() {
  const section = document.querySelector('.section-bg-image');
  if(!section) return;

  const page = window.location.pathname.split('/').pop().toLowerCase();

  let bgUrl = '';

  switch(page) {
    case 'index.html':
      bgUrl = 'images/pic5.jpeg';
      break;
    case 'pobyt.html':
      bgUrl = 'images/dvojdomy_zvrchu.JPEG';
      break;
    case 'wellness.html':
      bgUrl = 'images/pic5.jpeg';
      break;
    default:
      bgUrl = 'images/pic5.jpeg';
  }

  section.style.backgroundImage = `url('${bgUrl}')`;
});

// Set hero section background image from data attribute
document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector('.hero-section');
    const bg = hero.dataset.bg;
    if (bg) {
      hero.style.backgroundImage = `url('${bg}')`;
    }
  });