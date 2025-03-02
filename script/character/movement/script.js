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

// Fungsi untuk mendapatkan batas karakter dan canvas
function getBounds(character) {
    const canvas = document.querySelector(".canvas").getBoundingClientRect();
    const char = character.getBoundingClientRect();
    return { canvas, char };
}

// Fungsi untuk menggerakkan karakter ke kiri
function moveLeft(element, distance) {
    let bounds = getBounds(element);
    const currentLeft = parseInt(window.getComputedStyle(element).left, 10);

    if (currentLeft - distance >= 0) {
        element.style.left = `${currentLeft - distance}px`;
        savePosition(element);
    }
}

// Fungsi untuk menggerakkan karakter ke kanan
function moveRight(element, distance) {
    let bounds = getBounds(element);
    const currentLeft = parseInt(window.getComputedStyle(element).left, 10);

    if (currentLeft + bounds.char.width + distance <= bounds.canvas.width) {
        element.style.left = `${currentLeft + distance}px`;
        savePosition(element);
    }
}


// Fungsi untuk mengubah gambar karakter menjadi gambar menyerang
function strike(element) {
    const audio = new Audio('assets/sfx/attack.mp3');
    audio.play();
    const originalSrc = element.querySelector('img').src;
    element.querySelector('img').src = 'assets/character/character-strike.png';
    
    setTimeout(() => {
        element.querySelector('img').src = originalSrc;
    }, 500); // Kembali ke gambar asli setelah 500ms

    strikeEnemy();
}

// Inisialisasi karakter
const character = document.querySelector(".character");
loadPosition(character);


// meneyrang enemy ketika menyerang akan mengurangi hp enemy
// Fungsi untuk menyerang musuh
function strikeEnemy() {
    const character = document.querySelector('.character');
    const enemy = document.querySelector('.enemy');
    const characterBounds = character.getBoundingClientRect();
    const enemyBounds = enemy.getBoundingClientRect();

    console.log(characterBounds, enemyBounds);


    // Cek apakah karakter berada dalam jangkauan musuh
    if (!isDead && characterBounds.right >= enemyBounds.left && characterBounds.left <= enemyBounds.right) {
        enemyHit();
    }
}