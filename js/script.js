const hamburger = document.querySelector('label[for="toggler"]');
const navbar = document.querySelector(".navbar");
const toggler = document.getElementById("toggler");

document.addEventListener("click", function (e) {
  // PELINDUNG: Jika yang diklik adalah tombol .btn, matikan fungsi JS ini
  // Biarkan CSS hover bekerja sepenuhnya tanpa gangguan script
  if (e.target.closest(".btn")) {
    return;
  }

  // Klik di luar menu untuk menutup navbar (menggunakan elemen asli HTML Anda)
  if (toggler && toggler.checked && hamburger && navbar) {
    if (
      !hamburger.contains(e.target) &&
      !navbar.contains(e.target) &&
      e.target !== toggler
    ) {
      toggler.checked = false;
    }
  }
});

// why choose us section start
document.addEventListener("DOMContentLoaded", function () {
  const fadeItems = document.querySelectorAll(".fade-on-scroll");

  const observerOptions = {
    root: null,
    threshold: 0.1, // Terpicu jika minimal 10% elemen terlihat di layar
  };

  const scrollObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Fade in saat masuk ke dalam layar
        entry.target.classList.add("appear");
      } else {
        // Fade out smooth saat keluar dari layar (baik ke atas maupun ke bawah)
        entry.target.classList.remove("appear");
      }
    });
  }, observerOptions);

  fadeItems.forEach((item) => {
    scrollObserver.observe(item);
  });
});

// why choose us section end
const images = [
  "paket/rafting1.JPG",
  "paket/rafting2.JPG",
  "paket/rafting3.jpg",
  "paket/rafting6.jpg",
];

let currentIndex = 0;
const heroSection = document.querySelector(".hero");

function preloadImages() {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}
preloadImages();

if (heroSection) {
  heroSection.style.setProperty("--bg-image", `url("${images[currentIndex]}")`);
}

function changeBackground() {
  if (!heroSection) return;

  heroSection.classList.add("bg-fade");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroSection.style.setProperty(
      "--bg-image",
      `url("${images[currentIndex]}")`,
    );
  }, 200);

  setTimeout(() => {
    heroSection.classList.remove("bg-fade");
  }, 400);
}

setInterval(changeBackground, 4000);

// wa section start
window.addEventListener("DOMContentLoaded", () => {
  const bubble = document.getElementById("waBubble");

  if (bubble) {
    setTimeout(() => {
      bubble.classList.add("show");
    }, 2000);
  }
});

// about section tab switcher
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".ob-tab-btn");
  if (!btn) return;

  const board = btn.closest(".ob-interactive-board");
  if (!board) return;

  board
    .querySelectorAll(".ob-tab-btn")
    .forEach((b) => b.classList.remove("active"));
  board
    .querySelectorAll(".ob-tab-panel")
    .forEach((p) => p.classList.remove("active"));

  btn.classList.add("active");
  const targetId = btn.getAttribute("data-target");
  const targetPanel = document.getElementById(targetId);
  if (targetPanel) {
    targetPanel.classList.add("active");
  }
});

// wa section end

// opsi paket start
document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".details-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const card = this.closest(".package-card");
      const label = this.querySelector("span");

      card.classList.toggle("active");

      if (card.classList.contains("active")) {
        label.textContent = "Sembunyikan Rincian";
      } else {
        label.textContent = "Lihat Rincian Paket";
      }
    });
  });
});

// opsi paket end

// about section start
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".ob-tab-btn");
  if (!btn) return;

  const board = btn.closest(".ob-interactive-board");
  if (!board) return;

  // Hapus status active di semua tombol dan panel dalam section ini
  board
    .querySelectorAll(".ob-tab-btn")
    .forEach((b) => b.classList.remove("active"));
  board
    .querySelectorAll(".ob-tab-panel")
    .forEach((p) => p.classList.remove("active"));

  // Aktifkan tombol yang diklik dan panel tujuannya
  btn.classList.add("active");
  const targetId = btn.getAttribute("data-target");
  const targetPanel = document.getElementById(targetId);
  if (targetPanel) {
    targetPanel.classList.add("active");
  }
});
// about section end
