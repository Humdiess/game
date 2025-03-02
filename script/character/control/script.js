const WalkAudio = new Audio('assets/sfx/walking.mp3');
WalkAudio.loop = true; // Agar suara berjalan tidak terus mulai ulang

document.addEventListener('keydown', function (event) {
    const character = document.querySelector('.character');
    const distance = 10; // Jarak gerakan dalam piksel

    switch (event.key.toLowerCase()) {
        case "a":
            moveLeft(character, distance);
            character.style.animation = "walk 0.5s infinite";
            character.style.transform = "scaleX(-1)";
            if (WalkAudio.paused) WalkAudio.play();
            break;
        case "d":
            moveRight(character, distance);
            character.style.animation = "walk 0.5s infinite";
            character.style.transform = "scaleX(1)";
            if (WalkAudio.paused) WalkAudio.play();
            break;d
        case " ":
            strike(character);
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
