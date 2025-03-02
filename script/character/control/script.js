// DETEKSI TOMBOL DI KLIK W?A?S?D
// Jika tombol W ditekan, maka karakter akan bergerak ke atas

document.addEventListener('keydown', function (event) {
    const character = document.querySelector('.character');
    const distance = 10; // Jarak gerakan dalam piksel

    switch (event.key) {
        case "A":
        case "a":
            moveLeft(character, distance);
            break;
        case "D":
        case "d":
            moveRight(character, distance);
            break;
        default:
            break;
    }
});