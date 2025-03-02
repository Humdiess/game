const enemy = document.getElementsByClassName('enemy') [0];
let speed = 2;
let direction = 1;
let hp = 100;
let isDead = false;

function moveEnemy() {
    if (isDead) return; // Hentikan pergerakan jika musuh sudah

    const canvas = document.querySelector('.canvas');
    const enemyBounds = enemy.getBoundingClientRect();
    const canvasBounds = canvas.getBoundingClientRect();

    let currentLeft = enemy.style.left ? parseInt(enemy.style.left, 10) : 100;


    if (currentLeft + enemyBounds.width >= canvasBounds.width) {
        direction = -1;
        enemy.style.transform = "scaleX(1)";
    } else if (currentLeft <= 0) {
        direction = 1;
        enemy.style.transform = "scaleX(-1)";
    }

    enemy.style.left = `${currentLeft + speed * direction}px`;


    requestAnimationFrame(moveEnemy);
}

window.onload = () => {
    // enemy.style.left = "100px"; // Pastikan ada nilai awal
    // ketika enemy tidak mati, maka enemy akan bergerak
    moveEnemy();
};

// logic ketika musuh terserang, ketika hp habis enemy ganti jadi enemy-death.png
// Logic ketika musuh terserang, jika HP habis, musuh mati
function enemyHit() {
    if (isDead) return; // Cegah serangan jika musuh sudah mati

    hp -= 10;
    console.log("Enemy HP:", hp);

    if (hp <= 0) {
        isDead = true;
        enemy.querySelector('img').src = 'assets/character/enemy-death.png';
        enemy.style.animation = "none"; // Hentikan animasi jika ada
        console.log("Enemy Defeated!");
    }
}
