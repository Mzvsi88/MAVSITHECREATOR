// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");

    menuToggle.textContent = open ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open ? "Close menu" : "Open menu"
    );
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// SCROLL ANIMATIONS

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}

// COPYRIGHT YEAR

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// AUTOPLAY VIDEOS WHEN VISIBLE
// Videos play silently because browsers restrict
// autoplay with sound.

const videos = document.querySelectorAll("video.autoplay-video");

videos.forEach(video => {
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  video.addEventListener("click", () => {
    video.muted = !video.muted;
  });
});

if ("IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play().catch(() => {
          // Some browsers require the visitor
          // to press play manually.
        });
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.25 });

  videos.forEach(video => videoObserver.observe(video));
} else {
  videos.forEach(video => {
    video.play().catch(() => {});
  });
}