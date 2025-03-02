// DETEKSI TOMBOL DI KLIK W?A?S?D
// Jika tombol W ditekan, maka karakter akan bergerak ke atas

const WalkAudio = new Audio('assets/sfx/walking.mp3');

document.addEventListener('keydown', function (event) {
    const character = document.querySelector('.character');
    const distance = 10; // Jarak gerakan dalam piksel


    switch (event.key) {
        case "A":
        case "a":
            moveLeft(character, distance);
            character.style.animation = "walk 0.5s infinite";
            character.style.transform = "scaleX(-1)";
            WalkAudio.play();
            break;
        case "D":
        case "d":
            moveRight(character, distance);
            character.style.animation = "walk 0.5s infinite";
            character.style.transform = "scaleX(1)";
            WalkAudio.play();
            break;
        case " ":
            strike(character); // Menyerang saat tombol Space ditekan
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', function (event) {    
    const character = document.querySelector('.character');
    character.style.animation = "none";
    WalkAudio.pause();
});