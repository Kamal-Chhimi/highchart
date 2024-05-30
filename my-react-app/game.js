const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = "../../public/Logo-Billing";

const b = {
    x: 100,
    y: 200,
    width: 100,
    height: 100,
    dy: 0,
    jumpPower: -10,
    gravity: 0.5
};

let roadX = 0;

function drawRoad() {
    ctx.fillStyle = '#555';
    ctx.fillRect(roadX, 350, canvas.width, 50);
    ctx.fillRect(roadX + canvas.width, 350, canvas.width, 50);
    roadX -= 5;
    if (roadX <= -canvas.width) {
        roadX = 0;
    }
}

function drawB() {
    ctx.drawImage(img, 0, 0, b.width, b.height, b.x, b.y, b.width, b.height);
}

function updateB() {
    b.dy += b.gravity;
    b.y += b.dy;
    if (b.y + b.height > 350) {
        b.y = 350 - b.height;
        b.dy = 0;
    }
}

function jump() {
    if (b.y + b.height === 350) {
        b.dy = b.jumpPower;
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRoad();
    drawB();
    updateB();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        jump();
    }
});

img.onload = function () {
    gameLoop();
};
