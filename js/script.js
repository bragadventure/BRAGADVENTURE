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
  "../paket/rafting.jpg",
  "../paket/rafting2.jpg",
  "../paket/rafting3.jpg",
  "../paket/rafting6.jpg",
];

let currentIndex = 0;
const heroSection = document.querySelector(".hero");

// Inisialisasi pasang gambar pertama saat halaman dimuat
heroSection.style.setProperty("--bg-image", `url("${images[currentIndex]}")`);

function changeBackground() {
  // 1. Tambahkan class untuk memicu animasi blur dan peredupan di CSS
  heroSection.classList.add("bg-fade");

  // 2. Ganti url gambar tepat di milidetik ke-200 (titik tergelap versi CSS)
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroSection.style.setProperty(
      "--bg-image",
      `url("${images[currentIndex]}")`,
    );
  }, 200);

  // 3. Lepas class setelah 400ms agar siklus animasi siap dijalankan kembali
  setTimeout(() => {
    heroSection.classList.remove("bg-fade");
  }, 400);
}

// Menjalankan rotasi background secara otomatis setiap 4 detik
setInterval(changeBackground, 4000);

// wa section start
window.addEventListener("DOMContentLoaded", () => {
  const bubble = document.getElementById("waBubble");

  // PROTEKSI: Jalankan fungsi HANYA jika elemen waBubble ditemukan di halaman tersebut
  if (bubble) {
    setTimeout(() => {
      bubble.classList.add("show");
    }, 2000);
  }

  const features = document.querySelectorAll(".fade-on-scroll");
  if (features.length > 0) {
    // Jalankan logika animasi scroll lu di sini...
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
