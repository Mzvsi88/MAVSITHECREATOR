// MOBILE NAVIGATION

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {

  menuToggle.addEventListener('click', () => {

    const open = navLinks.classList.toggle('open');

    menuToggle.setAttribute(
      'aria-expanded',
      String(open)
    );

    menuToggle.setAttribute(
      'aria-label',
      open ? 'Close menu' : 'Open menu'
    );

    menuToggle.textContent = open ? '✕' : '☰';

  });

  document.querySelectorAll('#navLinks a').forEach(link => {

    link.addEventListener('click', () => {

      navLinks.classList.remove('open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      menuToggle.setAttribute(
        'aria-label',
        'Open menu'
      );

      menuToggle.textContent = '☰';

    });

  });

}


// SCROLL REVEAL ANIMATIONS

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.12
  });

  revealItems.forEach(item => {
    observer.observe(item);
  });

} else {

  revealItems.forEach(item => {
    item.classList.add('visible');
  });

}


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// PAUSE OTHER VIDEOS WHEN ONE STARTS PLAYING

document.querySelectorAll('video').forEach(video => {

  video.addEventListener('play', () => {

    document.querySelectorAll('video').forEach(otherVideo => {

      if (otherVideo !== video) {
        otherVideo.pause();
      }

    });

  });

});
