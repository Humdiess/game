// Fungsi untuk menyimpan posisi karakter ke localStorage
function savePosition(element) {
  const position = {
    left: element.style.left,
    top: element.style.top,
  };
  localStorage.setItem("characterPosition", JSON.stringify(position));
}

// Fungsi untuk memuat posisi karakter dari localStorage
function loadPosition(element) {
  const position = JSON.parse(localStorage.getItem("characterPosition"));
  if (position) {
    element.style.left = position.left;
    element.style.top = position.top;
  }
}

// Fungsi untuk menggerakkan karakter ke kiri
function moveLeft(element, distance) {
  const currentLeft = parseInt(window.getComputedStyle(element).left, 10);
  element.style.left = `${currentLeft - distance}px`;
  element.style.transform = "scaleX(-1)"; // Mirror character to face right
  savePosition(element);
}

// Fungsi untuk menggerakkan karakter ke kanan
function moveRight(element, distance) {
    const currentLeft = parseInt(window.getComputedStyle(element).left, 10);
    element.style.left = `${currentLeft + distance}px`;
    element.style.transform = "scaleX(1)"; // Mirror character to face right
    savePosition(element);
}


// Contoh penggunaan
const character = document.querySelector(".character");
loadPosition(character); // Memuat posisi karakter saat halaman dimuat

moveLeft(character, 10); // Menggerakkan karakter 10px ke kiri
moveRight(character, 10); // Menggerakkan karakter 10px ke kanan
moveUp(character, 10); // Menggerakkan karakter 10px ke atas
moveDown(character, 10); // Menggerakkan karakter 10px ke bawah
